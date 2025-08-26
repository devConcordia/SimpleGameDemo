
import Attack from '../actions/Attack.mjs'
import Role from '../Role.mjs'

/** Iara
 *	
 */
export default class Iara extends Role {
	
	constructor() {
		
		super( Role.ENTITY );
		
		this.addAction( new Attack() );
		
	}
	
	get isKiller() { return true }
	
}
