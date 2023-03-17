//solving min max sum problem from hacker rank.
//link - https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

//steps
//1. understand the problem.
//2. expolre concrete example.
//3. braek problem down into sub-problem.
//4. simplify and solve the problem.
//5. refactor the problem.


//braking down problem into subproblems
//1. find the maximum sum of 4 elements out of 5.
     //a. find 4 greater elements or find one least element in the array
     //b. suppose we have least element then we get that least elemetns' index
     //c. then we run loop and add 4 greater values by leaving the shortest element using its index.
     //then we get the sum of all greater elements.
     
//2. use the same above logic to find the sum of minimum value but in this case we need to find the greater element in the array.

//solution
function miniMaxSum(arr) {
    // Write your code here

    let arrLength = arr.length;

    //step 1 find the largest and smallest value in the array.
    let maxElement = Math.max(...arr);
    let minElement = Math.min(...arr);

    //step 2 find the index of smallest and largest value in the array.
    let maxIndex = arr.indexOf(maxElement);
    let minIndex = arr.indexOf(minElement);

    let maxSum = 0;
    let minSum = 0;

    for(let i=0; i<arrLength; i++){
        if(i !== minIndex){
            maxSum += arr[i]
        }
        if(i !== maxIndex){
            minSum += arr[i];
        }
    }

    console.log(minSum, maxSum);
}

miniMaxSum([1, 3, 5, 7, 9]);// 16 24

function miniMaxSumConcise(arr){
    let arrLength = arr.length;

    //step 1 find the largest and smallest value and their indexes respectively in the array.
    let maxIndex = arr.indexOf(Math.max(...arr));
    let minIndex = arr.indexOf(Math.min(...arr));

    let maxSum = 0;
    let minSum = 0;

    for(let i=0; i<arrLength; i++){
        if(i !== minIndex){
            maxSum += arr[i]
        }
        if(i !== maxIndex){
            minSum += arr[i];
        }
    }

    console.log(minSum, maxSum);
}

miniMaxSumConcise([1, 3, 5, 7, 9]) //16 24


//other solutions (this solution accepts string rather then array)
function processData(input) {
    var v = input.split(' ');
    for (var i = 0; i < v.length; i++) {
        v[i] = parseInt(v[i])
    }
    var max = -Infinity;
    var min = Infinity;
    for (var i = 0; i < v.length; i++) {
        var sum = 0;
        for (var j = 0; j < v.length; j++) {
            if ( i != j ) {
                sum += v[j];
            }
        }
        if (sum < min) min = sum;
        if (sum > max) max = sum;
    }
    console.log(min, max)
} 
processData("1, 3, 5, 7, 9")