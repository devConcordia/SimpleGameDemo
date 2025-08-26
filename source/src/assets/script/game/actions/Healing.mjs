
import Action from '../Action.mjs'

/** Healing
 *	
 */
export default class Healing extends Action {
	
	onOptions( players ) {
		
		return players.filter(function(e) {
			return !e.role.is('dead')
		});
		
	}
	
	onExecute( player, target ) {
		
		if( target.role.hasEvent( 'attack' ) )
			target.role.setEvent( 'healing', player );
		
	}
	
}
