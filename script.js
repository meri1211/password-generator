// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Declared an array that concatenates the choices of the user for each combination of choices.
let bigArray = [];

// Function to prompt user for password options
function getPasswordOptions() {
  // Created a prompt to ask the user about the length of the password  and stored it in a variable.
  let lengthOfPassword = prompt(
    "How many characters should your password have? Min 10- Max 64"
  );

  if (lengthOfPassword < 10) {
    alert("Password must be at least 10 characters long!");
  } else if (lengthOfPassword > 64) {
    alert("Password cannot be longer than 64 characters!");
  }
  console.log(lengthOfPassword);

  // Created confirm pop ups to confirm if the user would like to have  different types of characters, lowercase, etc or not, and stored the    answers in variables.
  let hasSpecialChar = confirm(
    "Would you like your password to include special characters?"
  );
  console.log(hasSpecialChar);

  let hasNumbers = confirm("Would you like your password to include numbers?");
  console.log(hasNumbers);

  let hasLowerCase = confirm(
    "Would you like your password to have lowercase letters?"
  );
  console.log(hasLowerCase);

  let hasUpperCase = confirm(
    "Would you like your password to have uppercase letters?"
  );
  console.log(hasUpperCase);
  // Created an alert in case no character types are chosen.
  if (
    hasSpecialChar === false &&
    hasNumbers === false &&
    hasLowerCase === false &&
    hasUpperCase === false
  ) {
    alert("Must choose at least one character type!");
  }

  // Created an object of the options the user chooses, that we can access with the dot notation.
  let userPasswordOptions = {
    length: lengthOfPassword,
    specialCharacters: hasSpecialChar,
    containsNumbers: hasNumbers, 
    lowercase: hasLowerCase, 
    uppercase: hasUpperCase
  };
  
};
console.log(userPasswordOptions);

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
