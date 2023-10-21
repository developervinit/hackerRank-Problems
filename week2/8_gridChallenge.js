//Here we are solving problem grid-challenge

//link:- https://www.hackerrank.com/challenges/one-month-preparation-kit-dynamic-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two

//Problem:- we have to find that the column and row of given grid of array can be rearranged in accending order so that both columns and row will be in accending order.

//Example:- 
//input-
// grid = ['abc', 'ade', 'efg'];

//output- "YES" 
//because rows and columns are already in accending order.
//abc
//ade
//efg

//Constraints:- according constraints we can use O(n**2) approach.
//1<=t<=100
//1<=n<=100

//logic:-
//get the length of grid and row sepratly in vafriables.
//then sort the string which are eleements inside array.
//then take fierst loop to the length of grid.
  ////then take "prevChar" variable and initialised with 0. "prevChar" variable is to keep the previous value.
  ////then take nested loop to length of string which is element of grid array.
  ////in nested loop get the ASCII code of current charechter in "currentChar". in nested loop we get current charechter by formation of indexes like [0][0], [1][0], [2][0] then in next cycle [0][1], [1][1], [2][1] when the length of string is 3.
  ////then we check if "currentChar" value is less then "prevChar" then return "NO".
  ////otherwise put "currentChar" value inside the "prevChar".
//otherwise out side of both loop return "YES".

function gridChallenge(grid){
    let gridLength = grid.length;
    let rowLength = grid[0].length;

    //sorting string elements of array
    let sorted = grid.map(string => {
         return string.split('').sort().join("");
    });

    for(var i=0; i<rowLength; i++){
        let prevChar = 0;
        for(var j=0; j<gridLength; j++){
            let currentChar = sorted[j][i].charCodeAt(0); //get ASCII-code of current el
            if(currentChar < prevChar){ //if currChar is less then prevChar return "NO"
                return "NO";
            }
            prevChar = currentChar; //otherwise update prevChar from currentChar value. 
        }
    }
    return "YES";
}


//Input:-
// let g = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']; //output -> YES
// let g = ['abc', 'ade', 'efg']; //output -> YES
// let g = ['abc', 'lmp', 'qrt']; //output -> YES
// let g = ['mpxz', 'abcd', 'wlmf']; // output -> NO
let g = ['abc', 'hjk', 'mpq', 'rtv']; // output -> YES

let outPut = gridChallenge(g); 

console.log(outPut);

//Where i stuck?.
//again i did not understand problem completely. I was confused with "grid sqare" word in the question. becuase grid sqaure means a sqaure whose row's and columns's length should be same but in one test they gave the row and columns length different. 

