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

    return;
  }

  //prompt for lowercase

var lowerCase = prompt("Would you like Lowercase characters; Yes , No")

if (lowerCase === "Yes"){
  ;
} else {
  ;
}

  //promt for uppercase 

  var upperCase = prompt("Would you like Uppercase characters? Yes , No")

  if (upperCase === "Yes"){
    ;
  } else {
    ;
  }

  //numeric

  var numChars = prompt("Would you like to include numbers in your password? Yes , No")

  if (numChars === "Yes"){
    ;
  } else {
    ;
  }

  //special characters

  var specChars = prompt("Would you like to include special characters? Yes , No")

  if(specChars === "Yes"){
    ;
  } else {
    ;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


