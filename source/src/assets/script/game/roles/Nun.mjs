
import Protection from '../actions/Protection.mjs'
import Role from '../Role.mjs'

/** 
 *	
 */
export default class Nun extends Role {
	
	constructor() {
		
		super( Role.HUMAN );
		
		this.addAction( new Protection() );
		
	}
	
}
