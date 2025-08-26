
import Attack from '../actions/Attack.mjs'
import Role from '../Role.mjs'

/** Cuca
 *	
 */
export default class Cuca extends Role {
	
	constructor() {
		
		super( Role.ENTITY );
		
		this.addAction( new Attack() );
		
	}
	
	get isKiller() { return true }
	
}
