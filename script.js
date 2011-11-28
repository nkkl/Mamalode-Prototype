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
			if ( page_id == 18 ) {
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
			if ( $("#menubar").css("display") == "none" ) {
				$("#menubar").show();
			} else {
				// hide the menu AND the toc
				$("#toc").hide();
				$("#menubar").hide();
			}
		}
	});

	$(".bookmark").live("tap", function(event) {
		// find current page
		var page_num = parseInt($(".active").attr("id").replace("page",""));

		if ( $("#bookmark" + page_num).hasClass("dogeared") ) {
			console.log("remove class");
			// if the page is already bookmarked, hide dogearing and remove from TOC
			$("#bookmark" + page_num).toggleClass("dogeared");
			$("div").remove("#bookmarksID > #linkto" + page_num);
			return;
		} else {
			console.log("add class");
			// add bookmark to current page's bookmark div
			$("#bookmark" + page_num).toggleClass("dogeared");

			var content = '<div class="item" id="linkto' + page_num + '"><img src="img/bookmark.png"/><div class="toc-bookmark">' + 'page ' + page_num + '</div></div>';
			$("#bookmarksID").append(content);
		}
	});

	$("#toc-trigger").live("tap", function(event) {
		$("#toc").toggle();
	});

	$("#toc-items > div > div").live("tap", function(event) {
		// make sure the article is actually in this edition
		if ($(this).attr("id")) {
			// parse out the target page number
			// create target ID based on page number
			var target_page = "#page" + parseInt($(this).attr("id").replace("linkto", ""));

			// hide the current page and menu, show target page
			$(".active").hide();
			$(".active").removeClass("active");
			$(target_page).show();
			$(target_page).addClass("active");
			$("#toc").hide();
			$("#menubar").hide();
		}
	});
});