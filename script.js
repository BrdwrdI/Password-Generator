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
  var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '|', '\\'];
  var numCharacters = ['0','1','2','3','4','5','6','7','8','9'];

  //prompt for length

  var passLength = prompt("Choose a length for your password between 8 and 128 chararcters");

  if (passLength >= 8 && passLength <= 128){
    ;
  } else {
    return generatePassword();
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

  //for loop to interate through the max number of characters 
  //randomly assigning specChars/numChars/upperCase/lowerCase
  //

  for (var i = 0; i < passLength; i++) {
    
  }



  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


