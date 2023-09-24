//This is the sample test before mock-test to get familiarity.

//given input n and which can be any number.
//find if given digit is multiple of 3 if yes then print "Fizz".
//find if given digit is multiple of 5 if yes then print "Buzz".
//if given digit is multiple of both 3 and 5 then print "FizzBuzz".
//otherwise if no above condition is fullfilled then print that number.

function fizzBuzz(n) {
    // Write your code here
    
    for(var i=1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }   
    }
}

function findMedian(arr) {
    // Write your code here
    
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr)
    let medianIndex = (sortedArr.length/2);
    console.log(medianIndex);
    console.log(Math.floor(medianIndex));
    console.log(sortedArr[medianIndex]);
    return sortedArr[medianIndex];

}

let output = findMedian([0, 1, 2, 4, 6, 5, 3])
console.log(output);