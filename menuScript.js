
$(function() {		

	/*
	 * Initialize scrollable with mousewheel support, and navigator plugin
	 * 
	 */ 
	$(".scrollable").scrollable({ vertical: true, mousewheel: true }).navigator({navi: "#toc-nav"});

    	
    	
    	 
    	$(".nav").live("click", function(event) {
		// find current page
		

			if ( $("#mamasays-nav").hasClass("selectedNav") ) {
				// if the navigation tab is already selected, hide dogearing and remove from TOC
				$("#mamasays-nav").toggleClass("selectedNav");	
				$("#mamasays-nav").css('background-color', "#FFD700");	
			} else{
				$("#mamasays-nav").toggleClass("selectedNav");
				$("#mamasays-nav").css('background-color',"#DAA520");
			}
			
			if ( $("#because-nav").hasClass("selectedNav") ) {
				// if the navigation tab is already selected, hide dogearing and remove from TOC
				$("#because-nav").toggleClass("selectedNav");	
				$("#because-nav").css('background-color', "#ADD8E6");	
			} else{
				$("#because-nav").toggleClass("selectedNav");
				$("#because-nav").css('background-color',"#00BFFF");
			}
			
			if ( $("#expressions-nav").hasClass("selectedNav") ) {
				// if the navigation tab is already selected, reset colour
				$("#expressions-nav").toggleClass("selectedNav");	
				$("#expressions-nav").css('background-color', "#DC143C");	
			} else{
				$("#expressions-nav").toggleClass("selectedNav");
				$("#expressions-nav").css('background-color',"#B22222");
			}
			
			if ( $("#bits-nav").hasClass("selectedNav") ) {
				// if the navigation tab is already selected, reset colour
				$("#bits-nav").toggleClass("selectedNav");	
				$("#bits-nav").css('background-color', "#800080");	
			} else{
				$("#bits-nav").toggleClass("selectedNav");
				$("#bits-nav").css('background-color',"#800080");
			}
			
			if ( $("#fashion-nav").hasClass("selectedNav") ) {
				// if the navigation tab is already selected, reset colour
				$("#fashion-nav").toggleClass("selectedNav");	
				$("#fashion-nav").css('background-color', "#09F");	
			} else{
				$("#fashion-nav").toggleClass("selectedNav");
				$("#fashion-nav").css('background-color',"#0000CD");
			}
			
			if ( $("#perspective-nav").hasClass("selectedNav") ) {
				// if the navigation tab is already selected, reset colour
				$("#perspective-nav").toggleClass("selectedNav");	
				$("#perspective-nav").css('background-color', "#40E0D0");	
			} else{
				$("#perspective-nav").toggleClass("selectedNav");
				$("#perspective-nav").css('background-color', 'black');
			}
			
			if ( $("#bookmarks-nav").hasClass("selectedNav") ) {
				// if the navigation tab is already selected, reset colour
				$("#bookmarks-nav").toggleClass("selectedNav");	
				$("#bookmarks-nav").css('background-color', rgb(100,100,100));	
			} else{
				$("#bookmarks-nav").toggleClass("selectedNav");
				$("#bookmarks-nav").css('background-color', 'black');
			}
			
		
		
		
	});
    	
    	/*
    	
    		case $("expressions-nav"):
    			tab.css('background-color',"#B22222");
    			break;
    		
    		case $("#bits-nav"):
    			tab.css('background-color',"#800080");
    			break;
    		
    		case $("#fashion-nav"):
    			tab.css('background-color',"#0000CD");
    			break;
    		
    		case $("#perspective-nav"):
    			tab.css('background-color',"#D87093");
    			break;
    		
    		case $("#bookmarks-nav"):
    			tab.css('background-color',"#20B2AA");
    			break;
    		
    		default: 
    		
    	}
    	tab.css('background-color','black');
    	*/
	

});

function resetColour(){
	$("#mamasays-nav").css('background-color', "#FFD700");
    $("#because-nav").css('background-color', "#ADD8E6"); 	
    $("#expressions-nav").css('background-color', "#DC143C");     	
    $("#bits-nav").css('background-color', "#C0C"); 
    $("#fashion-nav").css('background-color', "#09F"); 
    $("#perspective-nav").css('background-color', "#40E0D0");
    $("#bookmarks-nav").css('background-color', rgb(100,100,100)); 
}

