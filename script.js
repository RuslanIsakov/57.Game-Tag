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
