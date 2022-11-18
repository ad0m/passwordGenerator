// Array of special characters to be included in password
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  while(passLength <= 10 || passLength >= 64) {
    alert('The password length must be between 10 and 64!');
    passLength = (prompt('How long would you like you password to be? Please enter a number between 10 & 64.'));
  }

  var specialChar = confirm("Click 'OK' if you would like you password to include special characters. Or click 'Cancel' if not")
  var numbericChar = confirm("Click 'OK' if you would like you password to include numeric characters. Or click 'Cancel' if not");
  var lowerCase = confirm("Click 'OK' if you would like you password to include lowerCase characters. Or click 'Cancel' if not");
  var upperCase = confirm("Click 'OK' if you would like you password to include numeric characters. Or click 'Cancel' if not");
 
   // check if any of the above have been logged true, else request the user selects again
   while(specialChar === false && numbericChar === false && lowerCase === false && upperCase === false) {
     alert("You must select 'OK' for atleast one of character types");
   }
  
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  passLength = (prompt('How long would you like you password to be? Please enter a number between 10 & 64.'));
  getPasswordOptions();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}