//make an array of sounds?
//make buttons
//on click play sound
//assign sounds to buttons
//make divs to play sound on click


$(function() {
	var audTag = document.getElementsByTagName('audio');
	console.log(audTag);
	$('.sound1').on('click', function() {
		audTag[0].play();	
	});
	$('.sound2').on('click', function() {
		audTag[1].play();	
	});
	$('.sound3').on('click', function() {
		audTag[2].play();	
	});
	$('.sound4').on('click', function() {
		audTag[3].play();	
	});
	$('.sound5').on('click', function() {
		audTag[4].play();	
	});
	$('.sound6').on('click', function() {
		audTag[5].play();	
	});
	$('.sound7').on('click', function() {
		audTag[6].play();	
	});
	$('.sound8').on('click', function() {
		audTag[7].play();	
	});
	$('.sound9').on('click', function() {
		audTag[8].play();	
	});
});