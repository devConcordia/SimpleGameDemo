
import Action from '../Action.mjs'

/** Attack
 *	
 */
export default class Attack extends Action {
	
	onOptions( players ) {
		
		return players.filter(function(e) {
			return !e.role.is('dead')
		});
		
	}
	
	onExecute( player, target ) {
		
		if( !target.role.hasEvent( 'protection' ) )
			target.role.setEvent( 'attack', player );
		
	}
	
}
