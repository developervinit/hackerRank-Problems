//Here we are solving problem permute two arrays.

//understanding the problem.
//we have to permute element of array in a order that at least one conditon in which we have permuted elemetns should satisfy this condition a[i] + b[i] >= k, if no permutation satisfy the condition then return "NO". satisfy the condition means if both elements lenth is 3 means theere are three columns and each columns sum should be eqaul to or greater then the value of k at least any one permutaion of array.


//Input
let aar1_input1 = [2, 1, 3];
let arr2_input1 = [7, 6, 8];
let k_input1 = 10;

let aar3_input2 = [2, 1, 3];
let aar4_input3 = [8, 5, 6];
let k_input2 = 10;

let aar5_input4 = [0, 1];
let aar6_input5 = [0, 2];
let k1_input3 = 1;


//Logic by vinit:-
//in while loop first cycle i check if a[i] + b[i] < k (which is equa to ka[i] + b[i] >= k) is true then increse the "i" and go to next cycle otherwise swap b[i] with b[i+1] and dont increase "i" so if you dont increase "i" then in net cycle a[i] will be on the same position and swaped values will be copmpared and it will go untill you find "yes" or "NO".

function twoArrays(k, a, b){
    let n = a.length;
    let i = 0;
    let incre = 1;
    let prev = b[0];
    while(n){
        let sum = a[i] + b[i];
        if(sum < k){ 
            if(prev === b[incre]) return "NO";
            prev = b[i];    
            [b[i], b[incre]] = [b[incre], b[i]];
            if(incre < a.length-1){
                incre++;
            }  
        }else {
            i++;
            prev = b[i];
            n--;
        }
    }
    return "YES";
}

let output = twoArrays(k_input1, aar1_input1, arr2_input1);
console.log(output);

//------------Solution from Hacker rank's discussion section.

//Logic from hacker rank discussion:-
//first he got sum of arr A elements then got sum of arr B elementns.
//then got min element from arr A, then got max element from arr B
//then he adds "sum of array A elements" with "sum of array b elements" togather then devide that sum with the length of that array then compare that devided value with value of "k" so this becomes "first condition" like this "sum of both arrays element/n.length < k". 
//then he adds the min element of arr A and max element of arr B then compare their sum with value of "k" and this becomes the "second conditon" like this "sum of min and max < k".
//so if either condition is true out of first and second then it means no permutation of array will satisfy the given condition in problem statement.
//Note:- it means he took average of sum of both arrays element and then compare that averge value with the value of k, if the avrage is less then k then returns "NO". and same goes when he take the min and max value.


//if input is:-
// let aar1_input1 = [2, 1, 3];
// let arr2_input1 = [7, 6, 8];
//let k_input1 = 10;

function twoArrays_OtherSolution(k, A, B) {
    const resultA= A.reduce((acc, curr) => {return acc + curr}, 0); //6
    const resultB= B.reduce((acc, curr) => {return acc + curr}, 0); //21

    const minA= Math.min(...A); //1
    const minB= Math.max(...B); //8
 
    //      (6+21)/3 < 10                     || (1 + 8) < 10 
    return (resultA + resultB)/A.length < k || (minA + minB) < k ? "NO" : "YES";
 }


let output1 = twoArrays_OtherSolution(k_input1, aar1_input1, arr2_input1);
console.log(output1);


//---------------chatGPT solution-----------------

//Solution Logic:
// To solve this problem, you can follow these steps in JavaScript:
// Sort both arrays: First, sort both arrays A and B in non-decreasing order. Sorting the arrays will allow us to consider the smallest elements from A and B when checking the condition.
// Iterate and compare: Iterate through both sorted arrays simultaneously. For each index i, check if A[i] + B[n - 1 - i] (where n is the length of the arrays) is greater than or equal to the threshold k. If this condition holds for all indices, return "YES"; otherwise, return "NO."

//How this logic works:- This approach ensures that we consider the smallest elements from both arrays when checking the condition, as sorting the arrays brings smaller elements to the beginning.
//Explained:- So we add the smaalest element of first array and largest element of second array then comapre with threshhold so this combination gives insight for other combinations that there is no combination after permutaion in which sum of each column of two array will not be greate or equal to the value of "k".

function canPermuteToMeetThreshold(k, A, B) {
    // Sort both arrays in non-decreasing (acsending) order
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
  
    const n = A.length;

    // Compare the sorted elements of A and B
    for (let i = 0; i < n; i++) {
      if (A[i] + B[n - 1 - i] < k) { 
        return "NO"; // The condition is not met, return "NO"
      }
    }
  
    return "YES"; // All elements satisfy the condition, return "YES"
  }
  
//input
// let aar1_input1 = [2, 1, 3];
// let arr2_input1 = [7, 6, 8];

let output2 = canPermuteToMeetThreshold(k_input1, aar1_input1, arr2_input1);
console.log(output2);