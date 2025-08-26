
/** Role
 *	
 */
export default class Role {
	
	/// type
	static HUMAN = 'HUMAN';
	static ENTITY = 'ENTITY';
	
	///
	constructor( type ) {
		
		///
		this.type = type;
		this.actions = new Object;
		this.status = new Object;
		this.events = new Object;
		this.message = '';
		
	}
	
	get isKiller() { return false }
	
	get name() { return this.constructor.name }
	
	is( key ) { 
		
		return this.status[key] || false 
	
	}
	
	hasEvent(key) {
		
		return key in this.events
		
	}
	
	setEvent(key, value) {
		
		this.events[key] = value;
		
	}
	
	cleanUp() {
		
		if( typeof this.onCleanUp == 'function' )
			this.onCleanUp();
		
		if( this.events.attack && !this.events.healing ) {
			
			this.status.dead = this.events.attack;
			this.message = 'isDead';
			
		}
			
		for( let key in this.actions )
			this.actions[key].cleanUp();
		
		///
		this.events = new Object;
		
	}
	
	addAction( action ) {
		
		this.actions[ action.toString() ] = action;
		
	}
	
	toString() {
		
		return this.constructor.name
		
	}
	
}
