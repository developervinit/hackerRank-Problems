//Here we are solving zigzag sequence problem.

//Problem:- Given an array of "n" distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first "k" elements in the sequence are in increasing order and the last "k" elements are in decreasing order, where k=(n+1)/2. You need to find the lexicographically smallest zig zag sequence of the given array.

//Example:-

//if input is [2, 3, 5, 1, 4] then
//output:- [ 1, 2, 5, 4, 3 ]

//if input is [1, 2, 3, 4, 5, 6, 7] then
//output:- [1, 2, 3, 7, 6, 5, 4]

//Logic:- this logic is by Vinit

//1. sort the array in ascending order.
//2. then get the value of k by "((input.length + 1) / 2) - 1"
//3. creating fixed size array to length of given array in "zigZagArr" variable.
//4. then in array "zigZagArr" at index 0 and k fill value from soreted array least-element and largest-element respectively.
//then run for loop to length of sorted array.
  //loop start with 1
  //then we check if(zigZagArr[i] === undefined) then fill that index with the value from sorted array.
  //"count" is necessary and we can not use "i" instead of "count" because at k index we dont want to increase "count".
//then outside of for loop we revese the elements after the "k" index of "zigZagArr".  


function zigzagSequence(input){
    let sorted = input.sort((a, b) => a - b); //sorted array ascending
    let k = ((input.length + 1) / 2) - 1; // geting value of k
    let zigZagArr = new Array(input.length);
    let count = 1;
    zigZagArr[0] = sorted[0];
    zigZagArr[k] = sorted[sorted.length-1];
    for(var i=1; i<sorted.length; i++){
        if(zigZagArr[i] === undefined){
            zigZagArr[i] = sorted[count];
            count++;
        } 
    }

    //reversing elements after k index in zigZagArr array.
    let testOutPut = zigZagArr.slice(k, zigZagArr.length).sort((a, b) => b - a);
    let firstHalf = zigZagArr.slice(0, k);
    zigZagArr = firstHalf.concat(testOutPut);

    return zigZagArr;
}

let inputArr = [2, 3, 5, 1, 4];
// let inputArr = [1, 2, 3, 4, 5, 6, 7];
// let output = zigzagSequence(inputArr);
// console.log(output);


//-----------second logic----------------

//this is also almost the same logic like mine above.
//first he sort the array.
//here he swap mid index with last index
//then he swap the subarray which after mid index.


//difference betwwen my and his logic:-
//i take tempArray but he works with the given array and swap the subarray which is second half of the given array. and i dont swap, i used some technique to revese the subarray.

function findZigZagSequence(a, n){ //if input is [1, 2, 3, 4, 5, 6, 7], 7
    a.sort((a, b) => a - b); //sortin ascending //[1, 2, 3, 4, 5, 6, 7]

    let mid = ((n + 1)/2) - 1; //mid index 3 of array 
    [a[mid], a[n-1]] = [a[n-1], a[mid]] //swap mid el with last el. [1, 2, 3, 7, 5, 6, 4]

    let start = mid + 1; // 4=3+1
    let end = n - 2; //5=7-2

          //5 <= 4 false
          //4 <= 5 true
    while(start <= end){ 
        [a[start], a[end]] = [a[end], a[start]]; //swap [1, 2, 3, 7, 6, 5, 4]
        start = start + 1; //5=4+1
        end = end - 1; //4=5-1
    }
    return a;
}

let output2 = findZigZagSequence(inputArr, 5);
console.log(output2);
