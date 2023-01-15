// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordlength = prompt("Please choose a password length between 10 - 64");
// If cancel is pressed, returns to webpage
    if (passwordlength === null) {
      return;
    }
// Checks if the password length is between 10-64 and an integer
  while (!/^\d+$/.test(passwordlength) || !(passwordlength >= 10 && passwordlength <= 64)) {
    alert("Invalid input. Please enter one number between 10-64.");
    passwordlength = prompt("Please choose a password length between 10 - 64");
  }
// Use parseFloat to convert string to number
  passwordlength = parseFloat(passwordlength);

  let numbers = confirm("Choose OK if you want to include Numbers")
  let uppercase = confirm("Choose OK if you want to include Uppercase Letters")
  let lowercase = confirm("Choose OK if you want to include Lowercase Letters")
  let special = confirm("Choose OK if you want to include Special Characters")
  
// An alert for user to choose at least 1 option, if cancel is chosen on
  if (!numbers && !uppercase && !lowercase && !special) {
  alert("You must choose at least one option")
  return getPasswordOptions()
  }

  return {
    passwordlength, numbers, uppercase, lowercase, special 
  }
}



// Function for getting a random element from an array
function getRandom(random) {
  let arrayIndex = Math.floor(Math.random() * random.length);
  let arrayElement = random[arrayIndex];
  return arrayElement;
}


// Function to generate password with user input
function generatePassword() {
  let randomPassword = "";
  let chosenOptions = getPasswordOptions();
  let i = 0;
// While loop will continously run until desired length is reached
  while (i < chosenOptions.passwordlength) {
// These if statements check if each option has been selected or not
// If true, it will add a random character and the length will increase by 1
    if (chosenOptions.numbers && i < chosenOptions.passwordlength) {
      randomPassword += getRandom(numericCharacters);
      i++;
    }
    if (chosenOptions.uppercase && i < chosenOptions.passwordlength) {
      randomPassword += getRandom(upperCasedCharacters);
      i++;
    }
    if (chosenOptions.lowercase && i < chosenOptions.passwordlength) {
      randomPassword += getRandom(lowerCasedCharacters);
      i++;
    }
    if (chosenOptions.special && i < chosenOptions.passwordlength) {
      randomPassword += getRandom(specialCharacters);
      i++;
    }
  }
  return randomPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

