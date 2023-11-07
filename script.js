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

  var passLength = prompt("Choose a length for your password between 8 and 128 chararcters");

  if (passLength > 8 && passLength < 128){
    ;
  } else {
    ;
  }

  //prompt for lowercase



  //promt for uppercase 

  //numeric

  //special characters


  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


