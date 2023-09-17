//CountingSort problem

//Link of the problem:- https://www.hackerrank.com/challenges/one-month-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

//create a funtion to count occurence of the each element of array and return that occurenece in an array according places of counting from 0 to 100.

//constraints
// 100 <= n <= 10^6
// 0 <= arr[i] < 100

//logic
//First create new fixed size array of 100 elements filled with value 0.
//then run loop according to the length of given (input) array and write below conditions in it.
  //then on every iteration of loop increase the value of newArr by one, and newArr's index is got by using the current element of input array.
//then return the new array.   


// let inputArr = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33];

let inputArr = [63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75, 52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37, 97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6, 5, 24, 49, 82];


function countingSort(arr){
    //always 100 will be the length of the new array find below why? 
    let newArr = new Array(100).fill(0);
    for(var i=0; i<arr.length; i++){
        newArr[arr[i]] += 1;
    }
    return newArr;
}

let output = countingSort(inputArr);
console.log(output);


//My Solution runned succesfuly but dit not submited reasons are below:-
//1. I did not create newArr from 100 whereas I created it using the length of the given array.
//2. And I run loop to the length of the newArr whereas it should run to the length of the given array(input array).

//Conclution:- I did not understand the problem completly and the constraints also that is why I have made mistake in writing solution.

//Where I did not understand the problem:- I was thinking that newArr should be created using the length of input array but it is wrong approach because supppose we have array of 1000 input elements but the return array will always have 100 elements not more then it because it will be a frequency array and in input array each element can not be more then 99 and less then 0. so suppose input array element 2 occures 30 times so in result array which is frequecy array at the index 2 we have to write 30 and the element which are not present in the input array will have 0 on that index in result array like [0, 0, 30, 0, .....]. it means every time we will have 100 elements in the result array and index is the element which were given in the input array and on that index element is the occurance of that input array element.