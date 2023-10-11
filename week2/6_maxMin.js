//Here we are solving Max Min problem.

//Problem:- 

//Ex:-
//an array is given [1, 4, 7, 2]
//value of k = 2 (it will be the length of new array)

//output
//[1, 2] will provide the minimum unfairness. which is 1.

//Logic
//create newArr variable with empty array. and create varible for minimum-unfairness and then create variable for min value.
//sort the given array in accending order.
//then run for loop to the lenght of given array but loop should end before k element otherwise for will run to undefined elements.
  //then create nested loop which will run to the length equal to k.
  //then we push 0 to k elements inside the newArr then in next cycle we put elements from 1 to k+1 then so on.
//then outside nested for-loop take minimum and maximum value from from the newArr.
//then substract maximum and minimum value and store it in the varibale min.
//then get minimum-substracted value inside the minUnfairness varibale.
//then outside of outer loop return minUnfairness.


//Note:- this solution works fine but I got TLE that is why i wrote second approch with same login below this solution.

function maxMin_Solu1(k, arr) {
  // Write your code here
  let newArr = [];
  let minUnfairness = Infinity;
  let min;
  arr.sort((a, b) => a - b);
  for (var j = 0; j < arr.length - k + 1; j++) {
    for (var i = 0; i < k; i++) {
      newArr.push(arr[j + i]);
    }
    min = Math.max(...newArr) - Math.min(...newArr);
    minUnfairness = Math.min(min, minUnfairness);
    newArr = [];
  }
  return minUnfairness;
}

let inputArr1 = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]; //
let inputK1 = 4;

let inputArr2 = [
    6327, 571, 6599, 479, 7897, 9322, 4518, 571, 6677, 7432, 815, 6920, 4329,
    4104, 7775, 5708, 7991, 5802, 8619, 6053, 7539, 7454, 9000, 3267, 6343, 7165,
    4095, 439, 5621, 4095, 153, 1948, 1018, 6752, 8779, 5267, 2426, 9649, 2190,
    9103, 7081, 3006, 2376, 7762, 3462, 151, 3471, 1453, 2305, 8442,
  ];
  let inputK2 = 8;
  
// let output = maxMin_Solu2(inputK1, inputArr1);
// console.log(output); //3

// let output = maxMin_Solu2(inputK2, inputArr2);
// console.log(output); //816


//solution-2--------------------------------------------

//Sliding window approach work here for the O(n) time complexity. this approach was accepted.

//here i am using sliding window approach. i took two pointeres (initPoint, endPoint) to create window and every pointer increses by 1 in every loop cycle. but loop will run to length arr.length-k+1 because we have to stop loop before the k elements. and in every loop cycle we substract "endPoint - initPoint" and then compare which one is the minimum then return that one.

function maxMin_Solu2(k, arr) {
    // Write your code here
    let minUnfairness = Infinity;
    let min;
    arr.sort((a, b) => a - b);

    for (var j = 0; j < arr.length-k+1; j++) {
        let initPoint = j;
        let endPoint = k+j-1; 
        min = arr[endPoint] - arr[initPoint];
        minUnfairness = Math.min(min, minUnfairness);  
    }
    return minUnfairness;
  }

// let output = maxMin_Solu2(inputK1, inputArr1);
// console.log(output); //3

// let output = maxMin_Solu2(inputK2, inputArr2);
// console.log(output); //816

