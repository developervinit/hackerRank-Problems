//Here we are solving problem "dynamic-array".

//Problem:- https://www.hackerrank.com/challenges/one-month-preparation-kit-dynamic-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two

//Example:-

//input
//length of dynamic array = 2 
//length of array q = 5
//q array = [[1,0,5], [1,1,7], [1,0,3], [2,1,0], [2,1,1]]

//output
//[7, 3]


//understanding the problem.
//n is the number of dynamic arrays to initialize in the array. if n=2 then there will be 2 dynamic array inside the array like [[], []];
//The dynamic array has the following properties: 
 //1. It starts as an empty array.
 //2. It can grow in size as elements are added to it.
 //3. Each element is an integer.
//and q is the array which has number of queries like q=[[1,0,5], [1,1,7], [1,0,3], [2,1,0], [2,1,1]]. and those nested arrays represents the sequence queries.
//and we have 2 types of queries:-
  //type1- Add an element 'y' to the end of the 'x'th dynamic array in the sequence.
  //type2- Find the value of element (y % size) in the 'x'th dynamic array. Here, 'size' represents the 'size' of the 'x'th dynamic array.
//and those given queries has to be performed in two types on the dynamic arrays.
//how to recognize query-type-1 and query-type-2. the input "q" array has multiple nested arrays whose first element denotes the type of query.

//in simple words when we have type-1 query then we put value inside dynamic array and when we have type-2 query then we check value from the dynamic array. and index 0 of arrays which are nested inside q array tells about the query-type like if we get 1 then it is query-type-1 or if we get 2 then it is query-type-2.

function dynamicArray(n, queries){
    // let arr = new Array(2).fill([]);
    let arr = Array.from({length: n}, () => []);
    let lastAnswer = 0;
    let results = [];
    for(var i=0; i<queries.length; i++){
        //x is at index 1 at all nested elements in "q" and used to get the value of idx.
        let x = queries[i][1];
        
        //y is at index 2 in all nested array of q and will be pushed inside dynamic array.
        let y = queries[i][2]; 

        let idx = ((x^lastAnswer)%n); //idx is used as the index below to get value.
        
        //when q's i'th element's first element is 1 then always push "y" into dynamic array.
        if(queries[i][0] === 1){
          arr[idx].push(y); //pushing value inside array of arr[idx].
        }else { //when q's i'th element's first element is 2 then always check element in dynamicArray and then push that value inside result
            lastAnswer = arr[idx][y%arr[idx].length];
            results.push(lastAnswer);           
        }
        
    } 
    return results;
    
}
 
let q = [[1,0,5], [1,1,7], [1,0,3], [2,1,0], [2,1,1]];
let n = 2;

let output = dynamicArray(n, q); 
console.log(output); //[ 7, 3 ]

//-----------------------------------------------------------

//chatGPT solution:- they are using the same logic. 
function dynamicArray_GPT(n, queries) {
  const arr = Array.from({ length: n }, () => []);
  let lastAnswer = 0;
  const results = [];

  for (const query of queries) {
    const [queryType, x, y] = query;

    if (queryType === 1) {
      // Action Type 1: Add a toy
      const index = (x ^ lastAnswer) % n;
      arr[index].push(y);
    } else if (queryType === 2) {
      // Action Type 2: Check a box and count points
      const index = (x ^ lastAnswer) % n;
      const toysInBox = arr[index];
      const toyIndex = y % toysInBox.length;
      lastAnswer = toysInBox[toyIndex];
      results.push(lastAnswer);
    }
  }

  return results;
}

let output1 = dynamicArray_GPT(n, q);
console.log(output1); //[ 7, 3 ]



