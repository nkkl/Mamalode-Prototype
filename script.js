// Main javascript file

// wait until everything is loaded before running any js
$(document).ready(function() {	
	// catch swipes and "turn" the pages
	$(".page").live("swipeleft swiperight tap", function(event) {
		// catch right-to-left swipes
		if (event.type == "swipeleft") {
			var page_id = parseInt($(this).attr("id").replace("page",""));
			var new_page_id;

			// if we are on the last page, don't turn
			if ( page_id == 20 ) {
				// do nothing
			} else {
				new_page_id = page_id + 1;
				new_page_id = "#page" + new_page_id;

				$(this).hide();
				$(this).removeClass("active");
				$(new_page_id).show("slide", { direction: "right", distance: "50px" }, 500);
				$(new_page_id).addClass("active");
			}
		}

		// catch left-to-right swipes
		if (event.type == "swiperight") {
			var page_id = parseInt($(this).attr("id").replace("page",""));
			var new_page_id;

			// if we are on the first page, don't turn
			if (page_id == 0 ) {
				// do nothing
			} else {
				new_page_id = page_id - 1;
				new_page_id = "#page" + new_page_id;

				$(this).hide();
				$(this).removeClass("active");
				$(new_page_id).show("slide", { direction: "left", distance: "50px" }, 500);
				$(new_page_id).addClass("active");
			}
		}

		// toggle menu bar on tap
		if (event.type == "tap") {
			$("#menubar").toggle();
		}
	});

	$(".bookmark").live("tap", function(event) {
		// find current page
		var page_num = parseInt($(".active").attr("id").replace("page",""));
		console.log("page: " + page_num);
		// add bookmark to current page's bookmark div
		$("#bookmark" + page_num).toggleClass("dogeared");
		console.log("dogeared id: " + $(".dogeared").attr("id"));
	});
});