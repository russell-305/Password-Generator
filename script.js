// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define variables for all characters


//this includes all possible options


// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
function generatePassword(){
  var length=prompt("How long do you want your password? Between 8 to 128 characters.")
  var passwordlength=parseInt(length)
  console.log(length)
  var lowercase=confirm("Do you want lowercase letter's included?")
  console.log("lowercase = "+lowercase)
  var uppercase=confirm("Do you want uppercase letter's included?")
  console.log("uppercase = "+uppercase)
  var numbers=confirm("Do you want numbers included in your password?")
  console.log("numbers = "+numbers)
  var specialcharacters=confirm("Do you want special characters included in your password?")
  console.log("specialcharacters = "+specialcharacters)

  //evaluate booleans to grab password

  //if they want numbers (numbers == true)
  //add numbers to options array 


  

  
  if (Number.isInteger(passwordlength)&& passwordlength >=8 && passwordlength <=128 ){
    console.log(Number.isInteger(passwordlength))
    return "ABCDEFGHJKLNMOPQRSTUVWXYZabdefghjklnmopqrsyxz~!@#$%^&*()-=+*"

  }
  return "datanotvalid"
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
