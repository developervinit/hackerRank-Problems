//Diagonal difference
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


//Vinit's solution
//strategy
//you have to grab element according their row position. if row is 1 then it will grab 1st element then if row is second then grab second element and so on. for the right to left if row is first then grab last element then if row is second then grab second last element. 

//square matrix
// [1, 2, 12]
// [4, 5, 6]
// [7, 8, 9]

let arrOne = [[1, 2, 12], [4, 5, 6], [7, 8, 9]];
let arrTwo = [[1, 4], [8, 5]];
let arrThree = [[1, 2, 12, 5], [4, 5, 6, 20], [7, 8, 9, 12], [2, 6, 3, 11]];

// [1, 2, 3, 5]
// [4, 5, 6, 20]
// [7, 8, 9, 12]
// [2, 6, 3, 11]

function diagonalDifference(arr){
    //your logic comes here

    let sumOfArrayOne = 0;
    let sumOfArrayTwo = 0;
    for(var i=0; i<arr.length; i++){
        sumOfArrayOne += arr[i][i]; //[0][0], [1][1], [2][2]                  
        sumOfArrayTwo += arr[i][(arr.length - 1) - i]; //[0][2], [1][1], [2][1]       
    }

    //you can use Math.abs() to get absolute integer.
    let sumOfDiagonal = sumOfArrayTwo > sumOfArrayOne ? sumOfArrayTwo - sumOfArrayOne : sumOfArrayOne - sumOfArrayTwo;

    return sumOfDiagonal;
}

// console.log(diagonalDifference(arrOne));
// console.log(diagonalDifference(arrTwo));
// console.log(diagonalDifference(arrThree));


//---------------------------------------------------------------------

//another solution
// function processData(input) {
//     var rightDia = 0;
//     var leftDia = 0;
//     var inputArray = input.split("\n");
//     var squareSize = parseInt(inputArray.shift() - 1);
//     for (var i = 0; i < inputArray.length; i++) {
//         var row = inputArray[i].split(" ");
//         rightDia += parseInt(row[i]);
//         leftDia += parseInt(row[squareSize]);
//         squareSize--;
//     }
//     console.log(Math.abs(rightDia - leftDia));
// }

// processData(arrOne);
// processData(arrTwo);
// processData(arrThree);