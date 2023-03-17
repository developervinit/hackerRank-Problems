//here we are solving matching string problem (sparse arrays).
//link - https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one#

//Problem - There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
//Example
//strings = ["ab", "ab", "abc"];
//queries = ["ab", "abc", "bc"];
//There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, result=[2, 1, 0].


//steps to solve the problem.
//1. we will have for-loop according queries-array length.
//2. have "count" variable initialised with 0;
//3. have empty array variable.
//4. then we will have nested loop according strings-array length.
//5. in nested loop we will check if nestedloop[i] === parentloop[i] then increase the counter varibale and then outside of nestedloop and inside of parent loop counter variable will be pushed into an array then counter variable will be reset to 0.

function matchingString(strings, queries){
    let count = 0;
    let occurenceInArray = [];

    for(var i=0; i<queries.length; i++){
        for(var j=0; j<strings.length; j++){
            if(queries[i] === strings[j]){
                count++;
            }
        }
        occurenceInArray.push(count);
        count = 0;
    }
    return occurenceInArray;
}

//input
strings = ["ab", "ab", "abc"];
queries = ["ab", "abc", "bc"];

//input
strings1 = ["def", "de", "fgh"];
queries2 = ["de", "lmn", "fgh"];


console.log(matchingString(strings, queries)); //[ 2, 1, 0 ]
console.log(matchingString(strings1, queries2)); //[ 1, 0, 1 ]