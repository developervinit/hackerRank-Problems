//Here we are solving drawing book problem from haker rank.


//Prooblem:- A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:
//When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
//Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

//Example:- 
//when n=5 and p=3 then they open the book to page 1, flip 1 page and they are on the correct page. If they open the book to the last page, page 5, they turn 1 page and are at the correct page. Return 1.

//input format:- 
//int n: the number of pages in the book
//int p: the page number to turn to

//return value:-
//int: the minimum number of pages to turn

//Constraints
//1<=n<=10^5
//1<=p<=n

//Understanding the problem:-
//the page 1 is always on the right side.
//so when n=6 means total number of pages are 6 means we have even pages. so last page will be always on the left side. and if p is 5 or p is 4 then we need to turn 1 page to reach the p page.
//and when n=7 means total number of pages are 7 means we have odd pages. so last page will be always on the right side. and if p is 6 or p is 7 then we need to turn 0 page to go to the p page.
 
//Logic:-
//"p/2" means "page-to-turn/2" gives value of p when you start turning page from left-end.
//"((n-p)/2) + one" (where n is total number of pages and p is pages-to-turn) gives you value of p when you start turning pages from right-end. but variable "one" is tricky when total-pages(n) are even and when turn-to-page(p) is odd then variable "one" will get value 1 otherwise variable "one" will remain 0;

function pageCount(n, p){
    let one = 0;

    //when p is odd and n is even then variable one will have 1 otherwise it will be 0;
    if(p%2 !== 0 && n%2 === 0) one = 1;
    let fromRightEnd = Math.floor(((n-p)/2) + one); //page to turn from rigth-end
    let fromLetEnd = Math.floor(p/2); //page to turn from left-end
    let minimumPagesToTurn = Math.min(fromLetEnd, fromRightEnd);//getting minimum
    return minimumPagesToTurn;
}

// let outPut = pageCount(6, 3);
let outPut = pageCount(6, 5);
console.log(outPut);

//when input is (6, 3) then output is 1
//when input is (6, 5) then output is 1

//-------------------------------------

//Logic:-
//first he gets the views. views means, 1 view is count when you see first-page then second view is when you see 2, and 3 pages then it goes on. whether n (total number of page) is even or odd views will be the same.
//then he gets page-to-turn from the left-end. (he could do it directly like Math.floor(p/2)) this also give the same value.
//then he gets page-to-turn from the right-end. so he substracted total-views from the right-end turn-to-page and then he substract 1 also. so this is to maintain a condition when we have value of n odd or even and value pf p is odd or even. to understand this please read above topic "Understanding the problem".

function pageCountSecondLogic(n, p) {
    const views = Math.ceil((n+1)/2)
    const fromLetEnd = Math.ceil((p+1)/2)-1 // this can be simple like p/2
    const fromRightEnd = views-fromLetEnd-1;
    // console.log(fromLetEnd, fromRightEnd);
    return Math.min(fromLetEnd, fromRightEnd)
}

let outPut1 = pageCountSecondLogic(6, 3); //output 1
// let outPut1 = pageCountSecondLogic(6, 5); //output 1
console.log(outPut1);

//when input is (6, 3) then output is 1
//when input is (6, 5) then output is 1
