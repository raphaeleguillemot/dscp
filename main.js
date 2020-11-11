 $(document).ready(function(){
	var pid = ($("#menu-dropdown-list").length && $("#menu-dropdown-list").attr('class')) ? $("#menu-dropdown-list").attr('class'): "";

	$("#menu-toggle").click(function(){
		if($("#menu-dropdown-list").css("display", "none")){
			$("#menu-dropdown-list").show();
		}
		else{
			$("#menu-dropdown-list").hide();
		}
	});
	
	$("#menu-dropdown-list").click(function(){
		$("#menu-dropdown-list").hide();
	});
  });