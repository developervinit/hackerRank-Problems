//Here we are solving problem Tower-Breakers

//Problem:- https://www.hackerrank.com/challenges/one-month-preparation-kit-tower-breakers-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two

//constraints:-
//1<=t<=100
//1<=n,m<=106

//understanding the problem:-
//n = number of columns.
//m = height of towers.
//x = number of units to remove.
//y = m-x. remaining number of units.
//y can not be 0. atleast it has to be 1.

//Logic:-
//when m=1 and n can be n=even, or n=odd then 2nd player always win. because 1 player can not make any move.
//when n is even like n=even and m is not 1 then 2nd player always win. because second plyer always imitate first player move such as. when n is even like n=2 and m is 5 then we have column like this [5, 5] and then first player start with [1, 5] then 2nd player imitate first player like [1, 1] and then in first player turn he can not make move so 1st player will loose and 2nd player will win.
//when n is odd like n=odd and m is not 1 then 1st player always win. because second player always imitate first player move such as. when n is odd like n=3 and m is 5 then we have column like this [5, 5, 5] and then first player start with [1, 5, 5] then 2nd player imitate first player like [1, 1, 5] and then 1st player does like [1, 1, 1] and then in 2nd player turn he can not make move so 2nd player will loose and 1st player will win. 

//Solution:-
function towerBreaker(n, m){
    if(m===1) return 2; //player second always win.

    //when n is even and m is greater then 1 then 2nd player will win.
    if(n%2===0 && m > 1){
        return 2;
    }
    //when n is odd and m is greater then 1 then player 1 will win.
    return 1;
}

let output = towerBreaker(4, 3);

console.log(output) //2 player will win