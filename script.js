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
generateBtn.addEventListener("click", function writePassword() {
  // When button is clicked, prompt user to enter password length (between 8 and 128)
  var pwdLength = window.prompt('How many characters would you like your password to be? Enter a length between 8 and 128.')

  // Confirm user input.
  while (pwdLength < 8 || pwdLength > 128) {

    var pwdLength = window.prompt('How many characters would you like your password to be? Enter a length between 8 and 128.')

  }
  var confirmLength = window.confirm('You entered ' + pwdLength + '. Hit OK to confirm, or cancel to try again.')
    if (confirmLength) { 
    // After confirmation, prompt user to enter character types: Lowercase, uppercase, numberic, special characters.
      var charLowerCase = confirm('Would you like to use lowercase letters? OK for yes, Cancel for no.')
      if (charLowerCase) {
       
      }
    } 
    
});





// After character types are chosen, validate character types with user. Return to prompt if incorrect.

// After confirmation, generate password based on chosen criteria. Password is to be displayed on the page.

