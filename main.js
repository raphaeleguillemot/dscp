 $(document).ready(function(){
	$("#menu-toggle").click(function(){
		if($("ul").style.display == "none"){
			$("ul").style.display = "block";
		}
		else{
			$("ul").style.display = "none";
		}
	});
	
	$("ul").click(function(){
		$(this).style.display = "none";
	});
  });