
import GameApplication from './assets/script/game/GameApplication.mjs';

import LobbyView from './views/LobbyView.vue';
import SetupView from './views/SetupView.vue';
import NoticeView from './views/NoticeView.vue';
import ActionView from './views/ActionView.vue';
import EndGameView from './views/EndGameView.vue';
import ConfirmPlayerView from './views/ConfirmPlayerView.vue';

/**	Vilarejo
 *	
 */
export default class Vilarejo extends GameApplication {
	
	view = null;
	
	
	onLobby() {
		
		this.view = LobbyView;
		
	}
	
	onNewPlayers() {
		
		this.view = SetupView;
		
	}
	
	onConfirmPlayer() {
		
		this.view = ConfirmPlayerView;
		
	}
	
	onPlayerAction() {
		
		this.view = ActionView;
		
	}
	
	onNotice() {
		
		this.notice.title = this.lang.endNight( this.round.count );
		
		this.view = NoticeView;
		
	}
	
	onEndGame() {
		
	//	let winners = this.getWinners();
	//	
	//	if( winners.length == 0 )
	//		winners = this.getAlivePlayers();
	//	
	//	///
	//	this.notice.title = 'Fim de Jogo';
	//	
	//	this.notice.messages = winners.map(e=>e.role.name +' ('+ e.name +')');
		
		this.view = EndGameView;
		
	}
	
}
