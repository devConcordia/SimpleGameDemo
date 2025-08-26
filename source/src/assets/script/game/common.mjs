
/** sortRandom
 *	
 */
export function sortRandom() { return .5 - Math.random() }

/** generateUUID
 *	
 *	@para {Number} ... arguments
 */
export function generateUUID() {
	
	let output = [];
	
	for( let n of arguments ) {
		
		let size = parseInt( ("").padStart(n, "Z"), 36 );
		
		output.push( Math.floor(Math.random() * size).toString(36).toUpperCase() );
	
	}
	
	return output.join('-');
	
}

/** randomColor
 *	
 */
export function randomColor() {
	
	let out = [];
	
	for( let i = 0; i < 3; i++ )
		out.push( Math.floor(255 * (Math.random() * .5 + .5)).toString(16).padStart(2,'0') );
	
	return '#'+ out.join('').toUpperCase();

}

