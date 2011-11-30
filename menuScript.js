
$(function() {		

	/*
	 * Initialize scrollable with mousewheel support, and navigator plugin
	 * 
	 */ 
	$(".scrollable").scrollable({ vertical: true, mousewheel: true }).navigator({navi: "#toc-nav"});
	

	$('.nav').click(function() {
		
		var tab = $(this);
		
		/*
		$("#mamasays-nav").css('background-color', "#FFD700");
	    $("#because-nav").css('background-color', "#ADD8E6"); 	
	    $("#expressions-nav").css('background-color', "#DC143C");     	
	    $("#bits-nav").css('background-color', "#C0C"); 
	    $("#fashion-nav").css('background-color', "#09F"); 
	    $("#perspective-nav").css('background-color', "#40E0D0");
	    $("#bookmarks-nav").css('background-color', "rgb(100,100,100)"); 
	    	
	    // Sets the selected tab's background colour to black.
	    tab.css('background-color','black');
	    */
	    $("#mamasays-nav").css('border', 'none');
	    $("#because-nav").css('border', 'none'); 	
	    $("#expressions-nav").css('border', 'none');     	
	    $("#bits-nav").css('border', 'none'); 
	    $("#fashion-nav").css('border', 'none'); 
	    $("#perspective-nav").css('border', 'none');
	    $("#bookmarks-nav").css('border', 'none');
	    
	    tab.css('border-style', 'solid' );
	    tab.css('border-width', '2px');
	    tab.css('border-color', 'white'); 

		   
    	
    });
    
    
    
    	 
    	
	

});
/*
function resetColour(){
	$("#mamasays-nav").css('background-color', "#FFD700");
    $("#because-nav").css('background-color', "#ADD8E6"); 	
    $("#expressions-nav").css('background-color', "#DC143C");     	
    $("#bits-nav").css('background-color', "#C0C"); 
    $("#fashion-nav").css('background-color', "#09F"); 
    $("#perspective-nav").css('background-color', "#40E0D0");
    $("#bookmarks-nav").css('background-color', rgb(100,100,100)); 
}
*/

