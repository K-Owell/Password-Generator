// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// When button is clicked, prompt user to enter password length (between 8 and 128)

// After password length is chosen, validate the chosen length. Return to prompt if incorrect.

// After confirmation, prompt user to enter character types: Lowercase, uppercase, numberic, special characters.

// After character types are chosen, validate character types with user. Return to prompt if incorrect.

// After confirmation, generate password based on chosen criteria. Password is to be displayed on the page.

