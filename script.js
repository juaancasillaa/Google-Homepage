function alertSearch() {

  var gooGles = document.getElementById( "googleinput" ).value;
 
  alert("You searched for: " + gooGles);
  
}

document.getElementById("ggsearch").addEventListener("click", alertSearch);