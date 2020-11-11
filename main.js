 $(document).ready(function(){
	$("#menu-toggle").click(function(){
		if($("#menu-dropdown-list").css("display") == "none"){
			$("#menu-dropdown-list").css("display", "block");
		}
		else if($("#menu-dropdown-list").css("display")=="block"){
			$("#menu-dropdown-list").css("display", "none");
		}
	});
	
	$("#menu-dropdown-list").click(function(){
		if($("#menu-dropdown-list").css("display") == "none"){
				$("#menu-dropdown-list").css("display", "none");
			}
		});
  });