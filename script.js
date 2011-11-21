// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {
	// catch swipes and "turn" the pages
	$(".page").wipetouch(
	{
		// wipe from right to left
		// (turn to the NEXT page)
		wipeLeft: function(result) {
			if ( ".active".attr("id") == "3" ) {
				return;
			} else {
				var a;
				alert((".active").attr("id"));
			}
		}
		// wipe from left to right
		// (turn to the PREVIOUS page)
		wipeRight: function(result) {
			// do something when we wipe right
		}
	});
});