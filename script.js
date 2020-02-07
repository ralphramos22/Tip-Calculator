function calculateTip() {
  var billcst = document.getElementById("billcst").value;
  var serviceQual = document.getElementById("serviceQual").value;
  

  if (billcst === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

 
  var total = (billcst * serviceQual) 

  total = Math.round(total * 100) / 100;
  
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function() {
  calculateTip();

};

function openCity(evt, pgName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pgName).style.display = "block";
  evt.currentTarget.className += " active";
}

