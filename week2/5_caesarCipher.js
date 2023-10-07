//Here we are solving problem caesar cipher.

//problem:- https://www.hackerrank.com/challenges/one-month-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two

//Example:- sample input
//s (type string) is input string like "middle-Outz"
//k (type number) is the alphabet roation factor like 2

//output:- sample output
//okffng-Qwvb

//constraint:- 
//1<=n<=100
//0<=k<=100


//Solution-1 by Vinit-------------------------------------------------

//Logic
//1. take all 26 alphabet in varaible "alphabet". then take variable for final result "incrypted". then take variable "isCapital" for charchter's capital or small state.
//then run for loop to the lenght of given string.
  //in loop take variable for the index of current charechter in alphabets.
  //in loop check if current char is capital, if yes then "isCapital=true". and take the index of that current char. if no then just take index of current char.
  //then check if "index>=0" condition true then (cherechter is from alphabets)
     //take "stepsFromIndex = 26 - index;"" and "stepsToGo = k-stepsFromIndex;"
     //then get position by "position = stepsToGo-Math.floor(stepsToGo/26)*26;"
     //then check "isCaptal===true" then
       //convert capital charechter into small and add to the "incrypted" varible set isCapital to false;
     //if "isCaptal===fasle" then
       //just add current cherechter to "incrypted" variable.  
  //if condition (index >= 0) is false then (cherechter is not from alphabets)
     //just add current cherechter to "incrypted" variable.
     //and set isCapital to false;


function caesarCipher(s, k) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let incrypted = "";
  let isCapital = false;

  for (var i = 0; i < s.length; i++) {
    let index;
    if (s[i] === s[i].toUpperCase()) {
      let lowerCase = s[i].toLowerCase();
      index = alphabet.indexOf(lowerCase);
      isCapital = true;
    } else {
      index = alphabet.indexOf(s[i]);
    }
    if (index >= 0) {
        let stepsFromIndex = 26 - index; 
        let stepsToGo = k-stepsFromIndex;

        let position = stepsToGo-Math.floor(stepsToGo/26)*26; //L-1
        //let position = ((index) + k) % 26; //L-2

        //Note- logic on L-1 and L-2 are same just written in different manner.

        if (isCapital) {
          incrypted += alphabet[position].toUpperCase();
          isCapital = false;
        } else {
          incrypted += alphabet[position];
        }
    } else {
      incrypted += s[i];
      isCapital = false;
    }
  }
  return incrypted;
}

// let output = caesarCipher("middle-Outz", 2); //okffng-Qwvb
// let output = caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5); //
let output = caesarCipher("159357lcfd", 98); //159357fwzx
console.log(output);

//Solution-2 by chatGPT---------------------------------------------------------


//Logic:- the logic is explained inside the function step-by-step.
//1. this logic approximatly similar to mine.
//2. in this logic they get new position of cherechter by this formula "(charIndex + k) % alphabetLength;" and i am using diffrerent one.

function caesarCipher2(message, k) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // The alphabet
  const alphabetLength = alphabet.length;
  let encryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    let isLowerCase = false;

    // Check if the character is lowercase
    if (char >= 'a' && char <= 'z') {
      isLowerCase = true;
    }

    // Convert the character to uppercase for processing
    const uppercaseChar = char.toUpperCase();

    // Check if the character is a letter
    if (alphabet.includes(uppercaseChar)) {
      // Find the index of the character in the alphabet
      const charIndex = alphabet.indexOf(uppercaseChar);

      // Perform the Caesar Cipher shift
      // console.log("gpt", charIndex, k, alphabetLength);
      const shiftedIndex = (charIndex + k) % alphabetLength;

      // Get the shifted character from the alphabet
      let shiftedChar = alphabet[shiftedIndex];

      // If the original character was lowercase, convert the shifted character back to lowercase
      if (isLowerCase) {
        shiftedChar = shiftedChar.toLowerCase();
      }

      // Append the shifted character to the encrypted message
      encryptedMessage += shiftedChar;
    } else {
      // If the character is not a letter, keep it unchanged in the encrypted message
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

let output1 = caesarCipher2("159357lcfd", 98); //
// console.log(output1);


//Solution-3 by chatGPT---------------------------------------------------------

//Logic:- the logic is explained inside the function step-by-step.
//1. this logic uses unicode to shift charechter by k.
//2. for capital alphabets they have diffrent unicode and for small they have different unicode.
//3. they use certain formula with values.

//another logic from chatGPT
function caesarCipher3(message, k) {
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];

    if (/[a-z]/.test(char)) {
      // Shift lowercase letters
      const shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + k) % 26) + 97);
      encryptedMessage += shiftedChar;
    } else if (/[A-Z]/.test(char)) {
      // Shift uppercase letters
      const shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + k) % 26) + 65);
      encryptedMessage += shiftedChar;
    } else {
      // Keep non-alphabet characters unchanged
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

// Example usage:
const originalMessage = "Hello, World!";
const shiftAmount = 3;
const encrypted = caesarCipher3(originalMessage, shiftAmount);
console.log(encrypted); // Output: "Khoor, Zruog!"
