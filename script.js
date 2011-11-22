// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {
	// catch swipes and "turn" the pages
	$(".page").wipetouch(
	{
		// wipe from right to left
		// (turn to the NEXT page)
		wipeLeft: function(result) {	
			var page_id = parseInt($(".active").attr("id"));
			var new_page_id;

			// if we are on the last page, don't turn
			if ( page_id == 3 ) {
				alert("can't turn any farther");
			} else {
				new_page_id = page_id + 1;
				new_page_id = "#" + new_page_id;
				
				// TODO: fix this shit
				// PROBLEM: can't call standard jquery within wipetouch functions?
				// make the current div inactive
				(".active").hide();
				(".active").removeClass("active");
				
				// make the "next page" the active div
				(new_page_id).show();
				(new_page_id).addClass("active");
			};
		},

		// wipe from left to right
		// (turn to the PREVIOUS page)
		wipeRight: function(result) {
			var page_id = parseInt($(".active").attr("id"));
			var new_page_id;

			// if we are on the first page, don't turn
			if (page_id == 1 ) {
				alert("can't turn any earlier");
			} else {
				new_page_id = page_id - 1;
				alert("right " + new_page_id);
			}
		},
	});

	$(".page").click(function() {
		var page_id = $(this).attr("id");
		alert("click " + page_id);
	});
});