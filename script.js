// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = 0;

  //prompt for length

  //prompt


  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

