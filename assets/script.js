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
  let passwordlength = parseFloat(prompt("Please choose a password length between 10 - 64"));
  
  while (!(passwordlength >= 10 && passwordlength <= 64)) {
  alert("Invalid input. Password length must be a number between 10-64.");
  passwordlength = parseFloat(prompt("Please choose a password length between 10 - 64"));
  }

  if (!Number.isInteger(passwordlength)) {
  alert("Please enter a whole number");
  return getPasswordOptions();
  }

  let numbers = confirm("Choose OK if you want to include Numbers")
  let uppercase = confirm("Choose OK if you want to include Uppercase Letters")
  let lowercase = confirm("Choose OK if you want to include Lowercase Letters")
  let special = confirm("Choose OK if you want to include Special Characters")
  
  if (!numbers && !uppercase && !lowercase && !special) {
  alert("You must choose at least one option")
  return getPasswordOptions()
  }
  return {
    passwordlength,
    numbers,
    uppercase,
    lowercase,
    special
    }
  }
  
  
  
  
  




// Function for getting a random element from an array
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  let element = arr[index];
  return element;
}





// Function to generate password with user input
function generatePassword() {
  let randomPassword = "";
  let usersChoices = getPasswordOptions();
while (randomPassword.length < usersChoices.passwordlength) {
if (usersChoices.numbers) {
  randomPassword += getRandom(numericCharacters);
    }
if (usersChoices.uppercase) {
  randomPassword += getRandom(upperCasedCharacters);
    }
if (usersChoices.lowercase) {
  randomPassword += getRandom(lowerCasedCharacters);
    }
if (usersChoices.special) {
  randomPassword += getRandom(specialCharacters);
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

