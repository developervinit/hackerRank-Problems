//flipping bits problem on hacker rank
//You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.

//explanation - Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.

function flippingBits(n){
    return 2**32 - 1 - n;
}

console.log(flippingBits(3)); //4294967292
console.log(flippingBits(2147483647)); //2147483648
console.log(flippingBits(1)); // 4294967294
console.log(flippingBits(0)); // 4294967295
