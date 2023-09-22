//Here we are solving problem Subarray-Division-1 problem.

//Link:- https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

//In simple words:- We are given array of integers like s=[2, 2, 1, 3, 2] then we are given d=4 and m=2 so we have to find number of segment (sub array) whose length should be equal to value of given "m" and their elements sum should be equal to value of d. then we have to find that how many segments (sub arrays) can be made from the the given array. and find subarrays from the contguaous elements of the given array.

//Example:-
// given array is s = [2, 2, 1, 3, 2];
// them d=4, and m=2
// then we get two subarrays like [2, 2], [1, 3] from the given array.
// so we can see length of each subarray is 2 eqaula to the value of m.
// and each array's elements sum is equal to 4 which is the value of d.

//solu-1-------------Vinit's Logic to solve the problem--------------

//1. we take three variable in function scope. first is "elSum" to store elements sum and second is to count then segments and third is keep the innerLoopElementPosition which will be equal to i in every cycle of outer loop.
//2. then we take first loop which start from i=0 and will run "i<s.length-m" here m is the length of segment.
  //1. variable "innerLoopElementPosition" will take i's value
  //2. take nested loop which runs to lenth of m which is length of segment.
    //1. then get the sum of array elements in variable "elSum" to the length of inner loop.
    //2. to get the next eelement for the next cycle we increase the value of "innerLoopElementPosition" varibale by 1.
  //3. then if the sum is equal to the value of d which is the one of the input then increase value of varibale "count" by 1.
  //then set "elSum" to 0 for the next sum to the length of the segemtns.
  //then outer loop goes to it's defined length.
//then after outer loop's end return the "count" variable.

function birthday(s, d, m) {
  let elSum = 0;
  let count = 0;
  let innerLoopElementPosition = 0;
  for (var i = 0; i <= s.length - m; i++) {
    innerLoopElementPosition = i;
    for (var j = 0; j < m; j++) {
      elSum += s[innerLoopElementPosition];
      innerLoopElementPosition++;
    }
    if (elSum === d) {
      count++;
    }
    elSum = 0;
  }
  return count;
}

//time complexity is O(n^2)

//InputSet-1
// let s = [1, 2, 1, 3, 2,];
// let m = 2;
// let d = 3;

// let output = birthday(s, d, m);
// console.log(output);

//expected output
//2


//-----------------------------

// //InputSet-2
// let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
// let m = 7;
// let d = 18;

// let output = birthday(s, d, m);
// console.log(output);

//expected output
//3

//-----------------------------

// //InputSet-3
// let s = [2, 2, 1, 3, 2];
// let m = 2;
// let d = 4;

// let output = birthday(s, d, m);
// console.log(output);

//expected output
//2

//Solu-2--------------------ChatGPT O(n^2) solution -----------------------------

//Logic chatGPT:-
//The birthday function takes three arguments: "s" (the array of integers), "d" (the desired sum of each subarray), and "m" (the length of each subarray).

//It initializes a count variable to 0 to keep track of the number of valid subarrays.
//It uses two nested loops to iterate through the array "s". The outer loop runs from the beginning of the array to a position where it leaves enough elements for a subarray of length "m".
//Inside the inner loop, it calculates the sum of the current subarray.
//If the sum of the subarray is equal to the desired sum d, it increments the count variable.
//Finally, it returns the count, which represents the number of ways to divide the array into subarrays with the specified sum and length.
//This solution checks all possible subarrays of the given length and counts the ones that meet the specified criteria.

function birthdayChatGPT(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0; //I take this variable out of both loop but he takes so no neet to redefine it like I am doing in my solution

    //here is the diffrence between my and chatGPT's solution. he put i"s value into j then he increase the according it. means inner loop cycle will always be equal to the value of m. because i will increase according the outer loop cycle that why we need to increse m's value to equate the number of cycle of inner loop to the value of m. 
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}

// //InputSet-1
// let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
// let m = 7;
// let d = 18;

// let output = birthdayChatGPT(s, d, m);
// console.log(output);

//expected output
//3

//time complexity is O(n^2)


//Solu-3-------------Solution O(n) using sliding window technique---------------

//Vinit's solution

function birthdayOptimised(s, d, m){
  let windowSum = 0;
  let count = 0;

  for(let i=0; i<m; i++){
    windowSum += s[i];
  }

  for(let i=0; i<=s.length-m; i++){
    if(windowSum === d){
      count++;
    }
    
    windowSum += s[i+m] - s[i];    
  }
  return count;
}

//InputSet-1
// let s = [2, 2, 1, 3, 2];
// let m = 2;
// let d = 4;
//output - 2

//InputSet-2
// let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
// let m = 7;
// let d = 18;
//output - 3

//InputSet-3
// let s = [1, 2, 1, 3, 2,];
// let m = 2;
// let d = 3;
//output - 2

// let output = birthdayOptimised(s, d, m);
// console.log(output);


//Solu-4---------------Solution O(n) using sliding window technique----------------

//chatGPT's solution

//Explaining the logic:-
//first take two variables first is "count" second is "sum"
//suppose we have array [1, 2, 1, 3, 2,] and m=2, and d=4 then
//we create first sum 1+2 = 3 using first for loop 
//then for further sums we in second loop we start it with i=m
//then we want sum of s[1]+s[2] then we substract s[i]-s[i - m] then add it to the previous sum before all this we check if d==sum then increase the counter.
//after second loop we increase the counter.

function birthdayChatGptOptimised(s, d, m) {
  let count = 0;
  let sum = 0;

  // Initialize the sliding window
  for (let i = 0; i < m; i++) {
    sum += s[i];
  }

  // Slide the window and count valid subarrays
  for (let i = m; i < s.length; i++) {
    if (sum === d) {
      count++;
    }

    console.log(i, m, s[i - m]);
    // Move the sliding window by subtracting the first element and adding the next one
    sum += s[i] - s[i - m];
  }

  // Check the last window
  if (sum === d) {
    count++;
  }

  return count;
}

//InputSet-1
// let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
// let m = 7;
// let d = 18;
//output - 3

//InputSet-2
let s = [1, 2, 1, 3, 2,];
let m = 2;
let d = 3;
// output - 2

let output = birthdayChatGptOptimised(s, d, m);
console.log(output);



//Note:- Diffrence between my and chatGPT's solution 3 and 4:-
//1. I am condition "<=" in the second loop where as chatGPT using condition "<".
//2. in second loop for creating forward sliding window chatGPT use this 
//   "sum += s[i] - s[i - m];" condition and I use this
//   " windowSum += s[i+m] - s[i];";
//3. on step 2 we can see there is a difference between my and chatGPT logic to add the sum because chatGPT's second for loop start from value of "m" like "i=m" and Me start my second loop from 0 like i=0 that is why we have that difference. and his logic is perfect.
//3. chatGPT increase count variable after second loop.

//Explaining the logic of sum += s[i] - s[i - m]:-
//suppose we have array [1, 2, 1, 3, 2,] and m=2, and d=4 then
//we create first sum 1+2 = 3 using first for loop 
//then for further sums we in second loop we start it with i=m so if m's value is 2 then i will i=2
//then we put value in s[i]-s[i - m] then s[2]-s[2-2] => s[2]-s[0] => 1-1 => 0 then put values in this formula "sum += s[i] - s[i - m]". sum is 3.
//sum += s[i] - s[i - m] => 3 += 0 => 3.
//then we futher like this to the length of the array.



