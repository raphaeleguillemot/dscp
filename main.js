 $(document).ready(function(){
 	
 	var pid = ($("3menu-dropdown-list").length && $("#menu-dropdown-list").attr('class')) 
    ? $("#menu-dropdown-list").attr('class') 
    : "";

	$("#menu-toggle").click(function(){
		if(pid.style.display == "none"){
			pid.style.display = "block";
		}
		else{
			pid.style.display = "none";
		}
	});
	
	pid.click(function(){
		$(this).style.display = "none";
	});
  });