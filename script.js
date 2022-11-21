//Criteria
//Prompt the user for password criteria
//  1. Password length
//  2. Lowercase, Uppercase, Numbers, Special Characters
//Validate input and one character type selected
//generate password and display in alert or written to the page

//Create variables

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*";

var charArr = [];
var forLowerCase, forUpperCase, forNum, forSpec;
var passwordLength;

// Creat prompt and confirm methods
function writePassword() {
  passwordLength = window.prompt(
    "Choose a number between 8 and 128 for password length"
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.confirm("Your password is " + passwordLength + " characters long.");
  } else {
    window.alert("Please enter a number between 8 and 128");
  }
  forLowerCase = window.confirm("Do you want to use character type Lowercase?");
  forUpperCase = window.confirm("Do you want to use character type Uppercase?");
  forNum = window.confirm("Do you want to use character type Number?");
  forSpec = window.confirm(
    "Do you want to use character type Special Characters?"
  );

  if (
    (forLowerCase || forUpperCase || forNum || forSpec) &&
    passwordLength >= 8
  ) {
    generatePassword();
  } else {
    window.alert("Please choose a least one character.");
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

// Create generatePassword() function using if statements and for loop
function generatePassword() {
  var password = "";
  if (forLowerCase) {
    charArr += lowerCase;
  }
  if (forUpperCase) {
    charArr += upperCase;
  }
  if (forNum) {
    charArr += number;
  }
  if (forSpec) {
    charArr += special;
  }
  //for loop with Math.random() method
  for (i = 0; i < passwordLength; i++) {
    password += charArr.charAt(Math.floor(Math.random() * charArr.length));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
