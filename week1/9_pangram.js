//Here we are solving pangram problem.

//problem:- A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

//Function Description
//Complete the function pangrams in the editor below. It should return the string pangram if the input string is a "pangram". Otherwise, it should return "not pangram".

//Ex1:-
// input - "We promptly judged antique ivory buckles for the next prize"
// then output:- "panagram"

//Ex2:-
// input - "All of the letters of the alphabet are present in the string."
// then output:- "non panagram"

//logic:- Vinit's logic
//first truncate in-between space from the given string.
//take an new empty array with name "newArr".
//then run for loop to the length of the truncated string.
  //then convert current cherechter into lowercase.
  //then check if current lowercased cherechter is present in the newArr if yes then do not do anything otherwise put current charechter into the newArr.
//then in the outer space of for loop check if newArr's length is equal to 26 then return string "pangram" otherwise return string "non-pangram";  

function pangrams(s) {
    // Write your code here

    //removing space in between from the given string.
    let inputWithoutSpace = s.split(" ").join("");
    let auxArr = [];
    for(var i=0; i<inputWithoutSpace.length; i++){
        let lowerCase = inputWithoutSpace[i].toLowerCase();
        let index = auxArr.indexOf(lowerCase);
        if(index === -1){
            auxArr.push(lowerCase);
        }
    }
    return auxArr.length === 26 ? "pangram" : "not pangram";

}

let s = "We promptly judged antique ivory buckles for the next prize";
let s1 = "All of the letters of the alphabet are present in the string.";

let output = pangrams(s);
console.log(output);

let output1 = pangrams(s1);
console.log(output1);


//Others logic
function pangramsLogic2(s){
    let mySet = new Set();
    [...s].forEach(el => {
        mySet.add(el.toLowerCase());
    });

    //When we have input which has all 26 alphabets and duplicate alphabets also then using set will truncate all duplicate alphabetes and will keep only 26 and will keep one space also and other spaces will be truncated considered as duplicate so our set's size will be 27 when we all 26 alphabets. that is why we have written this condition.
    //and when our input has less then 26 alphabet then the size of the set will be 26 (conting one space when alphabets are 25) or less then 26 it means we have to return "non panagram"
    return mySet.size >= 27 ? "pangram" : "not pangram"
}

let output2 = pangramsLogic2(s);
console.log(output2);

let output3 = pangramsLogic2(s1);
console.log(output3);
