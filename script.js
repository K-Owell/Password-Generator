// Assignment code here

var lC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var num = ['1','2','3','4','5','6','7','8','9','0'];
var sym = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','.','<','>','/','|',];



function generatePassword() {
  var pwdLength = window.prompt('How many characters would you like your password to be? Enter a length between 8 and 128.')
  var result = [];
  // Confirm user input.
  while (pwdLength < 8 || pwdLength > 128) {

    var pwdLength = window.prompt('How many characters would you like your password to be? Enter a length between 8 and 128.')

  }
  
  var confirmLength = window.confirm('You entered ' + pwdLength + '. Hit OK to confirm, or cancel to try again.')
    if (confirmLength) { 
    // After confirmation, prompt user to enter character types: Lowercase, uppercase, numberic, special characters.
      var charLowerCase = confirm('Would you like to use lowercase letters? OK for yes, Cancel for no.')
      if (charLowerCase) {
         result = result.concat(lC);
         alert('The password will include lowercase letters.')
      }
      else {
        alert('The password will not include lowercase letters.')
      }
      var charUpperCase = confirm('Would you like to use Uppercase Letters? OK for yes, Cancel for no.')
      if (charUpperCase) {
         result = result.concat(uC);
         alert('The password will include Uppercase Letters.')
      }
      else {
        alert('The password will not include Uppercase Letters.')
      }
      var useNumbers = confirm('Would you like to use numbers? OK for yes, Cancel for no.')
      if (useNumbers) {
         result = result.concat(num);
         alert('The password will include numbers.')
      }
      else {
        alert('The password will not include numbers.')
      }
      var useSymbols = confirm('Would you like to use special characters? OK for yes, cancel for no.')
      if (useSymbols) {
         result = result.concat(sym);
         alert('The password will include special characters.')
      }
      else {
        alert('The password will not include special characters.')
      }
      if (charLowerCase === false && charUpperCase === false && useNumbers === false && useSymbols === false) {
        alert('You must choose at least one parameter. Please try again.')
        location.reload();
      }
    };
    console.log(result);

    var resultRandom = ""

    for (var i = 0; i < pwdLength; i++) {
      resultRandom = resultRandom + result[Math.floor(Math.random() * result.length)];
      
    }
    console.log(resultRandom);
    return resultRandom;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
  // When button is clicked, prompt user to enter password length (between 8 and 128)
