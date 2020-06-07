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




  // random number
  
  //prompt user for # of characters

var charactorNumber = function() {
  var charactorNumberPrompt= window.prompt("Thank you for using this service.\nHow many characters should your password be?\n(Your password must be between 8 and 128 characters.)"); 
   // check if the amount of charactors is correct
  if (charactorNumberPrompt >= 8 && charactorNumberPrompt <= 128) {
    //placeholder to check if working.
    window.alert("Thank you!"); 
    //move to function/prompt for special charactors question
  }
  else {
    window.alert("Your response does not fit the criteria.");
    //call charactor response number 
    charactorNumber();
  }
}


var confirmLower = false;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;




//
fourTypes();
//Confirmation of different 
function fourTypes(windowConfirms) {
  window.confirm("Do you need to include lowercase letters?")
    if (true) {
      confirmLower = true;
    } 
    console.log("The answer to lowercase is " + confirmLower)
  window.confirm("Do you need to include uppercase letters?")
    if (true) {
      confirmUpper = true;
    } else {
    }
    console.log("The answer to uppercase is " + confirmUpper)
  window.confirm("Do you need to include numeric letters?")
    if (true) {
      confirmNumeric = true;
    } else {
    }
    console.log("The answer to numeric is " + confirmNumeric)
    window.confirm("Do you need to include special letters?")
    if (true) {
      confirmSpecial = true;
    } else {
    }
    console.log("The answer to special is " + confirmSpecial)
}
// // prompt user for 4 different criteria
// var characterTypes = [lowercase, uppercase, numeric, special]

// //random generate lowercase
// var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var getLower = alpha[Math.floor(Math.random() * alpha.length) + 1];



//       //String.fromCharCode(97+Math.floor(Math.random() * 26))

// //random generate uppercase/lowercase
var upperCase = getRandomNumber(65, 90)
var lowerCase = getRandomNumber(97, 122)
function getRandomNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("This is a character " + String.fromCharCode(upperCase));
console.log("This is a character " + String.fromCharCode(lowerCase));

// random generate numeral
function randomNumeral() {
  for (var i = 0; i < 9; i++) {
    var random = Math.floor(Math.random() * 9);
    return ("Your random numeral is " + random)
  }; 
};
console.log(randomNumeral())

//random generate special character
function randomSpecialChar () {
  // example set of special chars as a string in no particular order
  var s = "!#$%&'()*+,-./:;<=>?@][\"^_`{|}~";

  // generating a random index into the string and extracting the character at that position
  return s.substr(Math.floor(s.length*Math.random()), 1);
} 

//for loop?
for (var i = 0; i < charactorNumber; i++) {

}


    // lowercase
    // uppercase
    // numeric
    // special character

