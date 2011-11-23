// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {	
	// catch swipes and "turn" the pages
	
	// wipe from right to left
	// (turn to the NEXT page)
	$(".page").swipeleft(function() {
		var page_id = parseInt($(".active").attr("id"));
		var new_page_id;

		// if we are on the last page, don't turn
		if ( page_id == 3 ) {
			alert("can't turn any later");
		} else {
			new_page_id = page_id + 1;
			new_page_id = "#" + new_page_id;
			
			$(new_page_id).addClass("active");
			$(new_page_id).show();
			$("#" + page_id).removeClass("active");
			$("#" + page_id).hide();
		}
	});

	// wipe from left to right
	// (turn to the PREVIOUS page)
	$(".page").swiperight(function() {
		var page_id = parseInt($(".active").attr("id"));
		var new_page_id;

		// if we are on the first page, don't turn
		if (page_id == 1 ) {
			alert("can't turn any earlier");
		} else {
			new_page_id = page_id - 1;
			new_page_id = "#" + new_page_id;

			$(new_page_id).addClass("active");
			$(new_page_id).show();
			$("#" + page_id).removeClass("active");
			$("#" + page_id).hide();
		}
	});

	$(".page").click(function() {
		var page_id = $(this).attr("id");
		alert("click " + page_id);
	});
});