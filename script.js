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

  // Created an object of the options the user chooses.
  let userPasswordOptions = {
    length: lengthOfPassword,
    specialCharacters: hasSpecialChar,
    containsNumbers: hasNumbers,
    lowercase: hasLowerCase,
    uppercase: hasUpperCase,
  };
  console.log(userPasswordOptions);
};
getPasswordOptions();

// If i uncomment the last section, the alerts don't work?!
/* Function for getting a random element from an array
function getRandom(arr) {
  // Using the Math.random() function to generate a random index number from the big array.
  let randomIndex = Math.floor(Math.random()*bigArray.length);
    for (let i = 0; i < bigArray.length; i++) {
      const index+ = bigArray[i];
      return index;
    }
};*/

//Function to generate password with user input
function generatePassword() {
  // Declared an empty string that will cumulate the user's password characters.
  let userPassword = "";
  function generatePassword() {
    for (let i = 0; i < lengthOfPassword; i++) {
      userPassword += bigArray[i];
    }
  };
  // Because the data type returned by the confirm is a boolean (true/ false), we can use conditional statements to concatenate the user options to the big array.
  
  if (userPasswordOptions.specialCharacters === true) {
    bigArray = bigArray.concat(specialCharacters);
  }
  if (userPasswordOptions.containsNumbers === true) {
    bigArray = bigArray.concat(numericCharacters);
  }
  if (userPasswordOptions.lowercase === true) {
    bigArray = bigArray.concat(lowerCasedCharacters);
  }
  if (userPasswordOptions.uppercase === true) {
    bigArray = bigArray.concat(upperCasedCharacters);
    
  }
  console.log(bigArray);
};
generatePassword();

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", writePassword);
