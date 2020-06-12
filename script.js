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
cell.style.top = (i*80+1*i+1)+'px';
				
				if(n <= 15){
					cell.classList.add('number');
cell.classList.add((i%2==0 && j%2>0 || i%2>0 && j%2==0) ? 'dark' : 'light');
					cell.innerHTML = (n++).toString();
				} else {
cell.className = 'empty';
				}
				
				puzzle.appendChild(cell);
			}
}
		
	}

	/**
	 * Shifts number cell to the empty cell
	 * 
	 */
function shiftCell(cell){
		
		// Checks if selected cell has number
		if(cell.clasName != 'empty'){
// Tries to get empty adjacent cell
			var emptyCell = getEmptyAdjacentCell(cell);
			
if(emptyCell){
				// Temporary data
var tmp = {style: cell.style.cssText, id: cell.id};
				
				// Exchanges id and style values
cell.style.cssText = emptyCell.style.cssText;
				cell.id = emptyCell.id;
				emptyCell.style.cssText = tmp.style;
emptyCell.id = tmp.id;
				
				if(state == 1){
					// Checks the order of numbers
					checkOrder();
				}
}
		}
		
	}

	/**
	 * Gets specific cell by row and column
	 *
	 */
	function getCell(row, col){
return document.getElementById('cell-'+row+'-'+col);
		
	}

	/**
	 * Gets empty cell
	 *
	 */
	function getEmptyCell(){
return puzzle.querySelector('.empty');
			
	}
	
	/**
	 * Gets empty adjacent cell if it exists
	 *
	 */
function getEmptyAdjacentCell(cell){
		
		// Gets all adjacent cells
		var adjacent = getAdjacentCells(cell);
		
// Searches for empty cell
		for(var i = 0; i < adjacent.length; i++){
if(adjacent[i].className == 'empty'){
				return adjacent[i];
			}
		}
// Empty adjacent cell was not found
		return false;
}

	/**
	 * Gets all adjacent cells
	 *
	 */
	function getAdjacentCells(cell){
var id = cell.id.split('-');
		
		// Gets cell position indexes
		var row = parseInt(id[1]);
		var col = parseInt(id[2]);
