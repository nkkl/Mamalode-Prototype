
$(function() {		

	/*
	 * Initialize scrollable with mousewheel support, and navigator plugin
	 * 
	 */ 
	$(".scrollable").scrollable({ vertical: true, mousewheel: true }).navigator({navi: "#toc-nav"});

	$('.nav').click(function() {
		
		var tab = $(this);
    	
    	tab.parent().find('.nav').css('background-color','#40E0D0');
    	
    	$(this).parent.find($("#mamasays-nav").css('background', "#FFD700");
    	$(this).parent.find($("#because-nav").css('background', "#ADD8E6");
    	$(this).parent.find($("#expressions-nav").css('background', "#DC143C");
    	$(this).parent.find($("#bits-nav").css('background', "#C0C");
    	$(this).parent.find($("#fashion-nav").css('background', "#09F");
    	$(this).parent.find($("#perspective-nav").css('background', "#40E0D0");
    	$(this).parent.find($("#bookmarks-nav").css('background', rgb(100,100,100)); 
    	
    	tab.css('background',"#D87093");
    	
	});

});

