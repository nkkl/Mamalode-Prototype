// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {	
	// catch swipes and "turn" the pages
	$(".page").live("swipeleft swiperight tap", function(event) {
		// catch right-to-left swipes
		if (event.type == "swipeleft") {
			var page_str = $(this).attr("id");
			page_str = page_str.replace("p","");
			var page_id = parseInt(page_str);
			var new_page_id;

			// if we are on the last page, don't turn
			if ( page_id == 44 ) {
				alert("can't turn any later");
			} else {
				new_page_id = page_id + 1;
				new_page_id = "#p" + new_page_id;
				
				$(this).hide();
				$(new_page_id).show("slide", { direction: "right", distance: "50px" }, 500);
			}
		}

		// catch left-to-right swipes
		if (event.type == "swiperight") {
			var page_str = $(this).attr("id");
			page_str = page_str.replace("p","");
			var page_id = parseInt(page_str);
			var new_page_id;

			// if we are on the first page, don't turn
			if (page_id == 0 ) {
				alert("can't turn any earlier");
			} else {
				new_page_id = page_id - 1;
				new_page_id = "#p" + new_page_id;

				$(this).hide();
				$(new_page_id).show("slide", { direction: "left", distance: "50px" }, 500);
			}
		}

		// toggle menu bar on tap
		if (event.type == "tap") {
			$("#menubar").toggle();
		}
	});

	$(".bookmark").live("tap", function(event) {
		$(".bookmark").toggleClass("dogeared");
	});
});