
import Action from '../Action.mjs'

/** ChangeRoles
 *	
 */
export default class ChangeRoles extends Action {
	
	onOptions( players ) {
		
		return players.filter(function(e) {
			return !e.isDead
		});
		
	}
	
	onExecute( player, target ) {
		
		let role = player.role;
		
		player.role = target.role;
		target.role = role;
		
	}
	
}
