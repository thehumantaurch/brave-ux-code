function validateLogin () {
  var username = document.loginForm.username.value
  var password = document.loginForm.password.value
  var pass_format = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (username == "") {
    console.log("Error: Username can't be blank!");
    return false;
  } else if (pass_format.test(password) != true) {
    console.log("Error: Password must have at least 6 characters and a combination of lowercase and capital letters");
    return false;
  } else {
    return true;
  }
}