
import ChangeRoles from '../actions/ChangeRoles.mjs'
import Role from '../Role.mjs'

/** Saci
 *	
 */
export default class Saci extends Role {
	
	constructor() {
		
		super( Role.ENTITY );
		
		this.addAction( new ChangeRoles() );
		
	}
	
}
