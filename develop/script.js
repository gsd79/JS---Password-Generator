// VARIABLES
//uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//numeric
var numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//special
var specialCase = ["!", "@", "#", "$", "%", "=", " ^ ", "&", "*"];

//when click button i want to prompt for password length between(8-128)
var generatePassword = function () {
    var passwordLength = prompt("How many character long would you like your password to be? Pick a number between 8-128.");

    // i want to PROMPT for password criteria
    // i want to prompt for lower,upper, num and special
    //return as true when selected, circle function if none selected (at least one)
    if (passwordLength >= 8 && passwordLength <= 128) {
        var upper = confirm(" Would you like to include upper case letters?");
        var lower = confirm("Would you like to include lower case letters? ");
        var numer = confirm("Would you like to include numbers?");
        var special = confirm("Would you like to include special characters?");
    } else {
        alert("You did not choose a number within range! Try again!");
        return generatePassword();
    }
    // if returned true, will be combined into an array
    if (upper || lower || numer || special) {
        var typeArr = [];
        if (upper) {
            typeArr = typeArr.concat(upperCase);
        }
        if (lower) {
            typeArr = typeArr.concat(lowerCase);
        }
        if (numer) {
            typeArr = typeArr.concat(numCase);
        }
        if (special) {
            typeArr = typeArr.concat(specialCase);
        }
        else {
            alert("You must pick at least one character type! Please try again!");
            return generatePassword();
        }
    }
    // put array into string to remove commas and make readable
    var password = "";
    // from that array of chosen arrays (typeArr), randomly generate index from each to match password length looping per passwordLength
    for (var i = 0; i < passwordLength; i++) {
        //creates a random number from 0 to typeArr.length -1 to be used as index in typeArr
        var randCharIndex = Math.floor(Math.random() * (typeArr.length));
        // resulting value at index in typeArr
        var randChar = typeArr[randCharIndex];
        // password = password string combined with randChar value
        password = password.concat(randChar);
    }
    //when all prompts are validated and loop is complete, generate password
    return password;
}


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