//Here we are solving problem flipping matrix (this problem was given in the final test of first week).

//Problem:- Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer sean reverse any of its rows or column any number of times. The goal of the game is to maximize the sum of the elements in n*n submatrix located in the upper-left quadrant of the matrix Given the inital configurations for q matrices, help Sean reverse the rows and columns of each matrix Inthe best possible way so thatthe sum of theelements in the matrix upperlet quadranttaint is maximal.

//ex:- 

//matrix = [[1, 2], [3, 4]]

//output
//4

//Logic
//for understnding logic please see image flippingMatrixLogic.png in week1 folder.

//link:- for more explaination
//https://medium.com/@mlgerardvla/hackerrank-flipping-the-matrix-javascript-7f945220ca1b

function flippingMatrix(arr) {
  let n = arr.length / 2;
  let sum = 0;

  for (var i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      const max = Math.max(
        arr[i][j],
        arr[i][2 * n - 1 - j],
        arr[2 * n - 1 - i][j],
        arr[2 * n - 1 - i][2 * n - 1 - j]
      );
      sum += max;
    }
  }

  return sum;
}

// let inputArr = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11, 12],
//   [13, 14, 15, 16, 17, 18],
//   [19, 20, 21, 22, 23, 24],
//   [25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36],
// ];

// let inputArr = [
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 10, 1, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 11],
// ];

let inputArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// let inputArr = [[1, 2], [5, 6]];

let output = flippingMatrix(inputArr);
console.log("output", output);


