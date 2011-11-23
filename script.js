// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {	
	// catch swipes and "turn" the pages
	$(".page").live("swipeleft swiperight", function(event) {
		if (event.type == "swipeleft") {
			var page_id = parseInt($(".active").attr("id"));
			var new_page_id;

			// if we are on the last page, don't turn
			if ( page_id == 3 ) {
				alert("can't turn any later");
			} else {
				new_page_id = page_id + 1;
				new_page_id = "#" + new_page_id;
				
				$(new_page_id).addClass("active");
				$("#" + page_id).removeClass("active");
				$.mobile.changePage($(new_page_id), { transition: "slideleft" });
			}
		}
		if (event.type == "swiperight") {
			var page_id = parseInt($(".active").attr("id"));
			var new_page_id;

			// if we are on the first page, don't turn
			if (page_id == 1 ) {
				alert("can't turn any earlier");
			} else {
				new_page_id = page_id - 1;
				new_page_id = "#" + new_page_id;

				$(new_page_id).addClass("active");
				$("#" + page_id).removeClass("active");
				$.mobile.changePage($(new_page_id), { transition: "slideright" });
			}
		}
	});

});