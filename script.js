var charactersNeeded;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {

    var characterNumberPrompt = window.prompt("Thank you for using this service.\nHow many characters should your password be?\n(Your password must be between 8 and 128 characters.)");
    // check if the amount of characters is correct
    if (characterNumberPrompt < 8 || characterNumberPrompt > 128) {
      window.alert("Your response does not fit the criteria.");
      writePassword();
    }

    neededChars();
    function neededChars() {
      charactersNeeded = {
        passwordLength: characterNumberPrompt,
        lowercase: window.confirm("Do you need to include lowercase letters?"),
        uppercase: window.confirm("Do you need to include uppercase letters?"),
        numeral: window.confirm("Do you need to include numerial?"),
        special: window.confirm("Do you need to include special letters?")
      }

      if (charactersNeeded.lowercase === false && charactersNeeded.uppercase === false && charactersNeeded.numeral === false && charactersNeeded.special === false) {
        window.alert("One of the four types of characters is needed to generate a password. Please try again.")
        neededChars();
      }
    }

    //Confirmation of different 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
    function generatePassword() {
      var passwordTemp = ""
      var total = ""
      console.log(charactersNeeded);
  
      if (charactersNeeded.lowercase) {
        var letterL="abcefghijklmnopqrstuvwxyz"
        var index = Math.floor(Math.random()*letterL.length)
        passwordTemp = passwordTemp + letterL[index]
        total = total + letterL
  
      };
  
      if (charactersNeeded.uppercase) {
        var letterU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var index = Math.floor(Math.random()*letterU.length)
        passwordTemp = passwordTemp + letterU[index]
        total = total + letterU
      };
  
      if (charactersNeeded.numeral) {
        var getNumeral = getRandomNumber()
        function getRandomNumber() {
          return Math.floor(Math.random() * 10);
        }
        passwordTemp = passwordTemp + getNumeral
        total = total + "0123456789"
      };
  
      if (charactersNeeded.special) {
        var specialC = "!\"$%&/()=?";
        var index = Math.floor(Math.random()*specialC.length)
        passwordTemp = passwordTemp + specialC[index]
        total = total + specialC
      }
    
      console.log(passwordTemp, passwordTemp.length, total, charactersNeeded.passwordLength); 

      lastChar();
          function lastChar() {        
        while (passwordTemp.length < charactersNeeded.passwordLength) {
            var index = Math.floor(Math.random()*total.length)
            passwordTemp = passwordTemp + total[index]
            console.log("Your password with the new letter is " + passwordTemp + " and your current password length is " + passwordTemp.length)
        };
        console.log("Your final temp password is " + passwordTemp)
        return passwordTemp;
      };
      return lastChar();
    };
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
