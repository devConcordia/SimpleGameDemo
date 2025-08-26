
import Role from '../Role.mjs'

/** 
 *	
 */
export default class Hunter extends Role {
	
	constructor() {
		
		super( Role.HUMAN );
		
		/// dog
		this.status.protection = 1;
		
	}
	
}
