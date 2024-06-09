let hideOne = document.getElementById("hide1");
let showOne = document.getElementById("p1_show");

hideOne.onclick = function () {
  document.getElementById("p1_text").style.display = "none";
};
showOne.onclick = function () {
  document.getElementById("p1_text").style.display = "";
};


let hidetow = document.getElementById("hide2");
let showtow = document.getElementById("p2_show");

hidetow.onclick = function () {
  document.getElementById("p2_text").style.display = "none";
};
showtow.onclick = function () {
  document.getElementById("p2_text").style.display = "";
};


let hidethree = document.getElementById("hide3");
let showthree = document.getElementById("p3_show");

hidethree.onclick = function () {
  document.getElementById("p3_text").style.display = "none";
};
showthree.onclick = function () {
  document.getElementById("p3_text").style.display = "";
};
