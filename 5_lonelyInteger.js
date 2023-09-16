//sloving lonely-integer problem on hacker rank
//link - https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

//Problem - Given an array of integers, where all elements but one occur twice, find the unique element.
//ex - 
// a = [1, 2, 3, 4, 3, 2, 1];
//the unique element is 4.

//logic and step by step solution.
//we will have nested loop on the input array
//first loop will go through the input array 
//second loop will also go through same array and will start from the 0 index in every occurence of the loop.
//in second loop we will have condition if(arr[i] === arr[j]) then count variable will be incresed by 1. so count variable will be incresed by 2 when element occur twice in the array otherwise count variable will be incresed by 1 when element occurs once in the array.
//then we write another condition that if(count === 1) then arr[i] value will be returned otherwise count var will be set to 0 and loop will continue.

function lonelyinteger(a){ 
    let length = a.length;
    let count = 0;
    for(var i=0; i<length; i++){
        for(var j=0; j<length; j++){
            if(a[i] === a[j]){
                count++
            }
        }
        if(count === 1){
            return a[i];
        }
        count = 0;
    }
}

//input
let a = [1, 2, 3, 4, 3, 2, 1];
let a1 = [1, 1, 2];

console.log(lonelyinteger(a)); //4
console.log(lonelyinteger(a1)); //2