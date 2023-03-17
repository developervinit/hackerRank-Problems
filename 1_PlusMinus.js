//this is "plusMinus" problem on hacker-rank.
//link - https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-one/challenges


//solving plus-minus problem on hacker rank

//problem solving steps
//1. understand the problem and restate it in your words.
//2. come up with the concreate example.
//3. break it down. write down step you need to take to solve the problem.
//4. solve/simplify the problem. find the the dificult part and solve it in the simplest form.
//5. refactor the code.

//steps to solve the plus-minus problem.
//1. take lngth of the array in variable
//2. then take separeate variables for positive-integer, negative-integer, and zero-integer. and initialise those variables with 0.
//3. then run loop through the array to count postive, negative, and zero integers and increse the value of respective variable.
//4. then after ending of loop devide each variable with the length of array and save them in the same variable respectively.
//5. then in answer show only 6 places after the decimal.
//5 then console.log() those variables.

//code to solve the problem.
function plusMinus(arr){

    let arrLength = arr.length;

    var positiveCount = 0, negativeCount = 0, zeroCount = 0;

    for(var i = 0; i < arrLength; i++){
        if(arr[i] > 0){
            positiveCount++;
        } else if(arr[i] < 0){
            negativeCount++;
        }else {
            zeroCount++;
        }
    }

    positiveCount = (positiveCount / arrLength).toFixed(6);
    negativeCount = (negativeCount / arrLength).toFixed(6);
    zeroCount = (zeroCount / arrLength).toFixed(6);

    console.log(positiveCount);
    console.log(negativeCount);
    console.log(zeroCount);
}

let multiValueArray = [1, 2, 1, -1, -2, -3, -4, 0, 0]; //

plusMinus(multiValueArray);