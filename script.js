(function(){
	
	var state = 1;
	var puzzle = document.getElementById('puzzle');

	// Creates solved puzzle
	solve();
// Listens for click on puzzle cells
	puzzle.addEventListener('click', function(e){
		if(state == 1){
			// Enables sliding animation
			puzzle.className = 'animate';
			shiftCell(e.target);
}
	});
	
	// Listens for click on control buttons
	document.getElementById('solve').addEventListener('click', solve);
	document.getElementById('scramble').addEventListener('click', scramble);
/**
	 * Creates solved puzzle
	 *
	 */
	function solve(){
		
if(state == 0){
			return;
		}
		
		puzzle.innerHTML = '';
var n = 1;
		for(var i = 0; i <= 3; i++){
			for(var j = 0; j <= 3; j++){
var cell = document.createElement('span');
				cell.id = 'cell-'+i+'-'+j;
				cell.style.left = (j*80+1*j+1)+'px';
