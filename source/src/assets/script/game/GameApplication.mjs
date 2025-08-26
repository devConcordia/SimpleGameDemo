
import { sortRandom } from './common.mjs';
import * as roles from './roles/index.mjs';
import Player from './Player.mjs';

///
const STORAGE_KEY = '__vilarejo';

/**	Vilarejo
 *	
 */
export default class GameApplication {
	
	constructor( data = {} ) {
		
		///
		this.playing = false;
		this.players = [];
		
		if( Array.isArray( data.players ) )
			this.players = data.players.map( Player.Load );
		
		/// 
		/// player		current player
		/// order		list of next players
		this.round = {
			count: 0,
			player: null,
			order: []
		};
		
		this.notice = {
			title: '',
			messages: []
		};
		
	}
	
	/// onLobby
	/// onNewPlayers
	/// onNextPlayer
	/// onPlayerAction
	
	lobby() {
		
		if( typeof this.onLobby == 'function' )
			this.onLobby();
		
	}
	
	newPlayers() {
		
		if( typeof this.onNewPlayers == 'function' )
			this.onNewPlayers();
		
	}
	
	startGame() {
		
		this.playing = true;
		
		this.round = {
			count: 0,
			player: null,
			order: []
		};
		
		this.notice = {
			title: '',
			messages: []
		};
		
		
		
		///
		let playersList = Array.from( this.players ).sort( sortRandom );
		
		let evilRolesList = Array.from( roles.hunters ).sort( sortRandom );
		
		/// 
		playersList.shift().role = new (evilRolesList.shift())();
		
		/// 
		let otherRolesList = Array.from( roles.preys ).sort( sortRandom );
		
		/// duplica alguns papeis para dar a quantidade de jogadores
	//	while( otherRolesList.length < playersList.length )
	//		otherRolesList.concat( [].sort( sortRandom ) );
		
		/// define os papeis aos outros jogadores
		while( playersList.length > 0 )
			playersList.shift().role = new (otherRolesList.shift())();
		
		this.createRound();
		
	}
	
	createRound() {
		
		if( this.verifyEndGame() ) {
			
			if( typeof this.onEndGame == 'function' )
				this.onEndGame();
			
		} else {
			
			
			this.round.count++;
			this.round.player = null;
			this.round.order = this.getAlivePlayers().sort( sortRandom );
			
			this.nextPlayer();
			
		}
		
	}
	
	nextPlayer() {
		
		let player = this.round.order.shift();
		
		if( player ) {
			
			this.round.player = player;
			
			if( typeof this.onConfirmPlayer == 'function' )
				this.onConfirmPlayer();
		
		} else {
			
			
			for( let player of this.players ) {
				
				player.role.cleanUp();
				
			}
		
			if( typeof this.onNotice == 'function' )
				this.onNotice();
		
		}
		
	}
	
	playerAction() {
		
		if( typeof this.onPlayerAction == 'function' )
			this.onPlayerAction();
		
	}
	
	/* */
	
	verifyEndGame() {
		
		let alive = this.getAlivePlayers();
		let count = this.countKiller( alive );
		
		///
		return count == alive.length || count == 0
		
	}
	
	/** countKiller
	 *	
	 *	counta o numero de killers entre os vivos
	 *	
	 */
	countKiller( list ) {
		
		if( !list ) list = this.getAlivePlayers();
		
		let output = 0;
		
		for( const player of list )
			if( player.role.isKiller ) output++;
		
		return output;
		
	}
	
	/** getWinners
	 *	
	 *	mecaninca de condições de vitoria 
	 *	
	 */
	getWinners() {
		
		let output = [];
		
		for( const player of this.players )
			if( player.role.is('winner') ) output.push( player );
		
		return output;
		
	}
	
	getDeadPlayers() {
		
		const output = [];
		
		for( const player of this.players )
			if( player.role.is('dead') ) output.push( player );
		
		return output;
		
	}
	
	getAlivePlayers() {
		
		const output = [];
		
		for( const player of this.players )
			if( !player.role.is('dead') ) output.push( player );
		
		return output;
		
	}
	
	/* */
	
	addPlayer( name, picture ) {
		
		this.players.push( Player.Create( name, picture ) );
		
		this.saveCache();
		
	}
	
	removePlayer( id ) {
		
		let players = this.players;
		
		for( let i = 0; i < players.length; i++ )
			if( players[i].id == id )
				players.splice( i--, 1 );
		
		this.saveCache();
		
	}
	
	saveCache() {
		
		let { players } = this;
		
		window.localStorage[ STORAGE_KEY ] = JSON.stringify({ players });
		
	}
	
	static Load() {
		
		let cache = new Object;
		
		if( STORAGE_KEY in localStorage ) {
			try {
				
				cache = JSON.parse( localStorage[ STORAGE_KEY ] );
				
			} catch(err) {}
		}
		
		return new this( cache );
		
	}
	
}

