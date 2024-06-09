let element = document.getElementById("mydiv");
let colors = 0;

element.onclick = function () {
  colors += 1;
  if (colors == 1) {
    element.style.backgroundColor = "red";
  } else if (colors == 2) {
    element.style.backgroundColor = "green";
  } else if (colors == 3) {
    element.style.backgroundColor = "blue";
  } else if (colors == 4) {
    element.style.backgroundColor = "black";
  } else if (colors == 5) {
    element.style.backgroundColor = "gold";
  } else if (colors == 6) {
    element.style.backgroundColor = "brown";
  }
};
