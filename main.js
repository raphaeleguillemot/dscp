 $(document).ready(function(){
	var pid = ($("#menu-dropdown-list").length && $("#menu-dropdown-list").attr('class')) ? $("#menu-dropdown-list").attr('class'): "";

	$("#menu-toggle").click(function(){
		console.log($("#menu-dropdown-list").css("display"));
		if($("#menu-dropdown-list").css("display", "none")){
			console.log("HEY");
			$("#menu-dropdown-list").css("display", "block");
		}
		else{
			console.log("THIS SHOULD LOAD");
			$("#menu-dropdown-list").css("display", "none");
		}
	});
	
	$("#menu-dropdown-list").click(function(){
		console.log("PLEASE");
		$("#menu-dropdown-list").css("display", "none");
	});
  });