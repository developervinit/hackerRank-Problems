//Here we are solving problem Xor String 2.

//Problem:- we have two input s1, s2 in binary form then we have to find their output.

//truth table to get xor:-
//false, false => false
//false, true => true
//true, false => true
//true, true => false

function strings_xor(s1, s2){
    if(s1.length !== s2.length) return "length of s1 and s2 should be equalt";
    let result = "";
    for(var i=0; i<s1.length; i++){
        if(s1[i] !== s2[i]){
            result += 1;
        }else {
            result += 0;
        }
    }
    return result;
}

let string1 = "0011";
let string2 = "0101";

let output = strings_xor(string1, string2);
console.log(output); //0110