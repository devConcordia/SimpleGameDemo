
import Attack from '../actions/Attack.mjs'
import Role from '../Role.mjs'

/** Capelobo
 *	
 *	@ref https://pt.wikipedia.org/wiki/Capelobo
 *	
 */
export default class Capelobo extends Role {
	
	constructor() {
		
		super( Role.ENTITY );
		
		this.addAction( new Attack() );
		
	}
	
	get isKiller() { return true }
	
}
