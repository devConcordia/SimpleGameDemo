
import Attack from '../actions/Attack.mjs'
import Role from '../Role.mjs'

/** MulaSemCabeca
 *	
 *	@ref https://pt.wikipedia.org/wiki/Mula_sem_cabe%C3%A7a
 *	
 */
export default class MulaSemCabeca extends Role {
	
	constructor() {
		
		super( Role.ENTITY );
		
		this.addAction( new Attack() );
		
	}
	
	get isKiller() { return true }
	
}
