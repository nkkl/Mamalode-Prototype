	
<<<<<<< HEAD
	// Hide images until they are not loaded
	scrollable.hide();
	var loading = $('<div class="loading">Loading...</div>').appendTo(wrapper);
	
	// Set function that will check if all images are loaded
	var interval = setInterval(function(){
		var images = scrollable.find('img');
		var completed = 0;
		
		// Counts number of images that are succesfully loaded
		images.each(function(){
			if (this.complete) completed++;	
		});
		
		if (completed == images.length){
			clearInterval(interval);
			// Timeout added to fix problem with Chrome
			setTimeout(function(){
				
				loading.hide();
				// Remove scrollbars
				wrapper.css({overflow: 'hidden'});						
				
				scrollable.slideDown('slow', function(){
					enable();	
				});					
			}, 1000);	
=======
// wait until everything is loaded before running any js
$(function() {		
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
>>>>>>> cb8f5d04be477c0717db1bab94676026545ffd29
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
		
	 
		// toggle menu bar on side
		if (event.type == "tap") {
			
			if ( $("#menubarID").css("display") == "none" ) {
				$("#menubarID").show();
				$("#scrollableID").show();
			} else {
				// hide the menu AND the toc
				$("#scrollableID").hide();
				$("#menubarID").hide();
			}
		}
		
	});
	
	
	// initialize scrollable with mousewheel support
	$(".scrollable").scrollable({ vertical: true, mousewheel: true });	
	
	$(".bookmark").live("tap", function(event) {
		// find current page
		var page_num = parseInt($(".active").attr("id").replace("page",""));

		// add bookmark to current page's bookmark div
		$("#bookmark" + page_num).toggleClass("dogeared");
	});
	
});