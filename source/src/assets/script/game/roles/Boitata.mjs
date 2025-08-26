
import Attack from '../actions/Attack.mjs'
import Role from '../Role.mjs'

/** Boitata
 *	
 *	@ref https://pt.wikipedia.org/wiki/Boitat%C3%A1
 *	
 */
export default class Boitata extends Role {
	
	constructor() {
		
		super( Role.ENTITY );
		
		this.addAction( new Attack() );
		
	}
	
	get isKiller() { return true }
	
}
