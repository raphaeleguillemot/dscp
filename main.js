var icon = document.getElementById("menu-toggle");
var dropdown = document.getElementsByTagName("ul");
  
icon.onclick = function() {
  if(dropdown.style.display == "none"){
    dropdown.style.display = "block";
  }
  else{
    dropdown.style.display = "none";
  }
}  

dropdown.onclick = function(){
	dropdown.style.display = "none";
}