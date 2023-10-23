//Here we are solving "prime dates" problem. in this problem task is to debug the code to sucessfuly debug the code but as usually i dont find the code which has to bebug so I am wring my own code.

//Link:- https://www.hackerrank.com/challenges/one-month-preparation-kit-prime-date/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two

//understanding the problem:-
//The only line of the input contains two strings  and  denoting the two dates following the format dd-mm-yyyy. Consider,  is the day number,  is the month number and  is the year number.
//then we have to find which date is lucky date.
//so first we convert date into a format such as if date is dd-mm-yyyy format like "02-08-2024" then convert it into format like "2082024" (removed the 0 from front) then devide that formated date with 4, 7 Now if "2082024" is divisible by either 4 or 7, then we call the date a lucky date.

//Input:-
//The only line of the input contains two strings u and v denoting the two dates following the format dd-mm-yyyy.

//Logic:-
//change the date format into given formate like from "02-08-2025" to "2082025".
//then devide that converted formet by 4 and 7 if either devide formated date completley then that date is lucky date.



function processData(input){
    let dateOne = input[0];
    let dateTwo = input[1];

    //converting date format into sugested one.
    let convertedDateFormatOne = dateOne.split("-").join("");
    let convertedDateFormatTwo = dateTwo.split("-").join("");

    //truncate 0 from the front  //Note find another way also.
    if(convertedDateFormatOne[0] === "0"){
        convertedDateFormatOne = convertedDateFormatOne.substring(1, convertedDateFormatOne.length);
    }

    //truncate 0 from the front  //Note find another way also.
    if(convertedDateFormatTwo[0] === "0"){
        convertedDateFormatTwo = convertedDateFormatTwo.substring(1, convertedDateFormatTwo.length);
    }

    if((convertedDateFormatOne%7 === 0 || convertedDateFormatOne%4 === 0) && (convertedDateFormatTwo%7 === 0 || convertedDateFormatTwo%4 === 0)){
        return "Lucky Date";
    }

    return "Not a lucky Date";
}

// let dateArray = ["02-08-2025", "04-09-2025"];
let dateArray = ["02-08-2024", "04-09-2025"];
let output = processData(dateArray);
console.log(output);

//Note:- I will solve thsi problem afterwards.