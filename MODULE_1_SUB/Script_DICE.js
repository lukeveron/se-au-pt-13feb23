
function getRoll(){
  var sidesdropdown = document.getElementById("Sidesselect")
    var sides = sidesdropdown.value
  alert(Math.floor(Math.random()* sides) +1);
};

function displayValue(){
  var display = getRoll.value
};

