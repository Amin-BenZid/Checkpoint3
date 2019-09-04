// BTNS
var o = document.getElementById("output").style.fontStyle;
var i = document.getElementById("output").style.fontStyle = "italic";      
var n = document.getElementById("output").style.fontStyle = "normal"; 

document.getElementById("ibts").addEventListener("click", function(){
  if(document.getElementById("output").style.fontStyle == "italic"){
    document.getElementById("output").style.fontStyle="normal";
  }
  else {
    document.getElementById("output").style.fontStyle = "italic";   

  }

});
document.getElementById("bbts").addEventListener("click", function(){
  if(document.getElementById("output").style.fontWeight == "bold"){
  document.getElementById("output").style.fontWeight = "normal";
}
  else{
  document.getElementById("output").style.fontWeight = "bold"
}

});
document.getElementById("underbts").addEventListener("click", function(){
  if(document.getElementById("output").style.textDecoration == "underline"){ 
  document.getElementById("output").style.textDecoration = "none";
}
  else{
    document.getElementById("output").style.textDecoration = "underline"
}
});


//  PX

function myFunction() {
 
    document.getElementById("output").style.fontSize = document.getElementById("mySelect").value; ;

  }
// arial
function myFunction1() {
  document.getElementById("output").style.fontFamily = document.getElementById("mySelect1").value ;

  }