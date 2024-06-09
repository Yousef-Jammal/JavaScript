let pass1 = document.querySelector("[name='password1']");
let pass2 = document.querySelector("[name='password2']");

document.forms[0].onsubmit = function (e) {
  let passLengthValid1 = false;
  let passLengthValid2 = false;
  let passEqualValid = false;

  // one
  if (pass1.value.length >= 6) {
    document.getElementById("pw1_check").textContent = "";
    passLengthValid1 = true;
  }
  if (passLengthValid1 === false) {
    document.getElementById("pw1_check").textContent =
      "Error, Please Enter a password 6 characters or more";
  }
  //  tow
  if (pass2.value.length >= 6) {
    document.getElementById("pw2_check").textContent = "";
    passLengthValid2 = true;
  }
  // all
  if (pass1.value === pass2.value) {
    passEqualValid = true;
    document.getElementById("pw2_check").textContent = "";
  }
  if (pass1.value !== pass2.value) {
    document.getElementById("pw2_check").textContent = "Not equal";
  }
  // finish
  if (
    passEqualValid === false ||
    passLengthValid1 === false ||
    passLengthValid2 === false
  ) {
    console.log("valid");
    e.preventDefault();
  }
};
