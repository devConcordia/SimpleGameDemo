
import { generateUUID, randomColor } from './common.mjs'

/** Player
 *	
 */
export default class Player {
	
	constructor( id, color, name, picture ) {
		
		this.id = id;
		this.color = color;
		this.name = name;
		this.picture = picture;
		
		this.role = null;
		
	}
	
	toJSON() {
		
		return {
			id: this.id,
			name: this.name,
			picture: this.picture,
			color: this.color
		}
		
	}
	
	static Create( name, picture ) {
		
		return new Player(
			generateUUID(4,3,4),
			randomColor(),
			name,
			picture
		);
		
	}
	
	static Load( object ) {
		
		if( !object.id || !object.name )
			throw new Error('Player.Load: Failure');
		
		return new Player( object.id, object.color, object.name, object.picture );
		
	}
	
}

