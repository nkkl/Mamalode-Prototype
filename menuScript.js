$(function() {		

	/*
	 * Initialize scrollable with mousewheel support, and navigator plugin
	 * 
	 */ 
	$(".scrollable").scrollable({ vertical: true, mousewheel: true }).navigator({navi: "#toc-nav"});

});