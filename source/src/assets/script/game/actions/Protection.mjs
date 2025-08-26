
import Action from '../Action.mjs'

/** Protection
 *	
 */
export default class Protection extends Action {
	
	onOptions( players ) {
		
		return players.filter(function(e) {
			return !e.role.is('dead')
		});
		
	}
	
	onExecute( player, target ) {
		
		if( !target.role.hasEvent( 'attack' ) )
			target.role.setEvent( 'protection', player );
		
	}
	
}
