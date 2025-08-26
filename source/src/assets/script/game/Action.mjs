
/** Action
 *	
 */
export default class Action {
	
	/// onCleanUp
	/// onOptions
	/// onExecute
	
	constructor() {
		
		this.count = 0;
		
	}
	
	options( players ) {
		
		if( typeof this.onOptions == 'function' )
			return this.onOptions( players );
		
		return players
		
	}
	
	cleanUp() {
		
		if( typeof this.onCleanUp == 'function' )
			this.onCleanUp();
		
	}
	
	execute( player, ...targets ) {
		
		this.count++;
		
		if( typeof this.onExecute == 'function' )
			this.onExecute( player, ...targets );
		
	}
	
	
	
	toString() {
		
		return this.constructor.name
		
	}
	
}