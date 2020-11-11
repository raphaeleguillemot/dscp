 $(document).ready(function(){
 var pid = ($("#menu-dropdown-list").length && $("#menu-dropdown-list").attr('class')) ? $("#menu-dropdown-list").attr('class'): "";

	$("#menu-toggle").click(function(){
		if($(pid).css("display", "none");){
			$(pid).show();
		}
		else{
			$(pid).hide();
		}
	});
	
	$(pid).click(function(){
		$(pid).hide();
	});
  });