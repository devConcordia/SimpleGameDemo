
import Healing from '../actions/Healing.mjs'
import Role from '../Role.mjs'

/** 
 *	
 */
export default class Doctor extends Role {
	
	constructor() {
		
		super( Role.HUMAN );
		
		this.addAction( new Healing() );
		
	}
	
}
