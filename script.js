// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {
	// catch swipes and "turn" the pages
	$(".page").wipetouch(
	{
		tapToClick: true,

		// wipe from right to left
		// (turn to the NEXT page)
		wipeLeft: function(result) {
			//
		},
		// wipe from left to right
		// (turn to the PREVIOUS page)
		wipeRight: function(result) {
			// alert(result.x);
		},
	});

	$(".page").click(function() {
		var page_id = $(this).attr("id");
		alert(page_id);
	});
});