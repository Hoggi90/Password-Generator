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

// Function to prompt user for password options.
function getPasswordOptions() {
  let passwordlength = prompt("Choose a password length between 10 - 64");
  // If cancel is pressed, returns to webpage
  if (passwordlength === null) {
    passwordlength = "";
    return passwordlength;
  }
  // Checks if the password length is between 10-64 and an integer.
  while (!/^(?!^0)\d+$/.test(passwordlength) || !(passwordlength >= 10 && passwordlength <= 64)) {
    alert("INVALID! Choose a number between 10-64.");
    return getPasswordOptions();
  }
  // These are alerts messages to show which options you would like to use.
  let numbers = confirm("Choose OK if you want to include Numbers")
  let uppercase = confirm("Choose OK if you want to include Uppercase Letters")
  let lowercase = confirm("Choose OK if you want to include Lowercase Letters")
  let special = confirm("Choose OK if you want to include Special Characters")

  // An alert for user to choose at least 1 option, if cancel is chosen on all options
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
  // Created empty string to store the password
  // Stored the function into the variable
  let randomPassword = "";
  let passwordOptions = getPasswordOptions();
  let i = 0;
  // While loop will continously run until desired length is reached
  while (i < passwordOptions.passwordlength) {
    // These if statements check if each option has been selected or not
    // If true, it will add a random character from each array and the length will increase by 1
    if (passwordOptions.numbers && i < passwordOptions.passwordlength) {
      randomPassword += getRandom(numericCharacters);
      i++;
    }
    if (passwordOptions.uppercase && i < passwordOptions.passwordlength) {
      randomPassword += getRandom(upperCasedCharacters);
      i++;
    }
    if (passwordOptions.lowercase && i < passwordOptions.passwordlength) {
      randomPassword += getRandom(lowerCasedCharacters);
      i++;
    }
    if (passwordOptions.special && i < passwordOptions.passwordlength) {
      randomPassword += getRandom(specialCharacters);
      i++;
    }
  }
  // this code shuffles the contents of randomPassword
  randomPassword = randomPassword.split('').sort(() => Math.random() - 0.5).join('');
  return randomPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  // assigning the value tot he variable password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

