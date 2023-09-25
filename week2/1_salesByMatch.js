//Here we are solving problem sales by match

//Problem:- There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

//Example:-
//n = 7
//ar = [1, 2, 1, 2, 1, 3, 2];
//There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

//return value:-
// 2

//constraints:-
//1 <= n <= 100
//1 <= ar[i] <= 100 where 0 <= i <= n

//Logic to solve problem:-
//1. I am going to use frequency counter approch to solve this problem.
//2. first I will create frequency object to get the frequecy of every element in the array using for loop.
  //a. run for loop on given array and create object for elements frequency.
//then run for-in-loop on the frequency object.
//in frequency-object check if frequency of element is greater then 1 then devide it by 2 and use Math.floor() on it. so that value is the pair of that element.
//return that value.

function sockMerchant(n, ar) {
  let frequencyObj = {};
  let pairCount = 0;

  //create frequency object of elements
  for (var i = 0; i < n; i++) {
    frequencyObj.hasOwnProperty([ar[i]])
      ? (frequencyObj[ar[i]] += 1)
      : (frequencyObj[ar[i]] = 1);
  }

  //checking every property of frequency object
  for (var key in frequencyObj) {
    if (frequencyObj[key] > 1) {
      let pairs = Math.floor(frequencyObj[key] / 2);
      pairCount += pairs;
    }
  }
  return pairCount;
}

let inputN = 7;
let inputArr = [1, 2, 1, 2, 1, 3, 2];

// let inputN = 9;
// let inputArr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

let output = sockMerchant(inputN, inputArr);
// console.log(output);

//Second logic------------------------------------------------------------

//others logic from hacker-rank

//Logic:-
//create array "colors" with undefined elements according the length of given array.
//then check colors element using the given array elements as index.
//so we run forEach loop on given array "ar" and then check if in "colors" array on index "color" (remember color is the element of "ar" not "colors") value is truthy then increse "pairs" by one and then convert truthy value into falsy, and when in "colors" array on index "color" value is falsy then dont increase then "pairs" by one and convert falsy into truthy.
//so what we are doing here, whenever value is truthy we count 1 pairs.
//then returns the value of pairs.

function sockMerchantLogic2(n, ar) {
  const colors = Array(n);
  let pairs = 0;
  ar.forEach((color) => { //[1, 2, 1, 2, 1, 3, 2]
    
    //does "colors" array have some element on "color" index, then increase "pairs" "color" variable holds some value from "ar" array.
    if (colors[color]) pairs++; 

    console.log(colors[color], "index:", color, "pairs:", pairs);

    //on index "color" in "colors" array put boolean value.
    colors[color] = !colors[color]; 
  });
  return pairs;
}

let output1 = sockMerchantLogic2(inputN, inputArr);
console.log(output1);

//if input is inputN = 7, inputArr = [1, 2, 1, 2, 1, 3, 2] then
//output
//2

//Thirs Logic------------------------------------------------

//he is using my the approach i have used but in second loop in condition he is doing little bit different.

//others logic from hacker-rank.
function sockMerchantLogic3(n, ar) {
  // Write your code here
  let track = {};
  let myarr = [];

  //created frquency counter
  for (let i = 0; i < ar.length; i++) {
    if (track[ar[i]]) track[ar[i]]++;
    else {
      track[ar[i]] = 1;
    }
  }

  //to convert object into array filled with elements which were the value in object.
  //value of object which is the frequency of color becomes the element in array
  const arr = Object.values(track);

  //here he is running loop on the length of array. and I was running loop on the object.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1) { //if current-el is less the 1. 
      if (arr[i] % 2 === 1) {  //if current-value has remainder 1 then
        myarr.push(arr[i] - 1); //substract 1 from current-value it then push into myarr 
      } else {
        myarr.push(arr[i]); //otherwise push current-value as it is in the myarr.
      }
    }
  }
  
  //then he added them togather and devided them by 2
  return myarr.reduce((a, b) => a + b, 0) / 2;
}

let output2 = sockMerchantLogic3(inputN, inputArr);
// console.log(output2); // 3
