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

  // check if the amount of charactors is correct
  // random number
  
  //prompt user for # of characters

var charactorNumber = function() {
  var charactorNumberPrompt= window.prompt("Thank you for using this service.\nHow many characters should your password be?\n(Your password must be between 8 and 128 characters.)"); 
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

console.log(charactorNumber(7));
