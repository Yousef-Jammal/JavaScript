let hideOne = document.getElementById("hide1");
let showOne = document.getElementById("p1_show");

hideOne.onclick = function () {
  document.getElementById("p1_text").value = "";
};
console.log(document.getElementById("p1_text").value)