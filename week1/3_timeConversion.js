//here we have to convert time format from 12am, 12pm to 24hours(militry format) format.
//link:- https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one.


//steps to solve the problem.
//1. know difference of time using am and pm.
     //how would you know the difference.
       //ans- we will get differnce with am, pm.
     //if you get to know the difference then how would you convert them to respective format.
       //ans - split string according colon then we will have object of predefined values so we will convert string values from the object. we will remove AM, PM tag.
//2. time with am will remain as it was, but am tag will be removed.
//3. time with pm will be changed to the 24hour format.
//4. then return or print the time.


//solution-1 (this solution has passed all the test on hacker rank) solution-by-vinit;
function timeConversion(s) {
    // Write your code here
    let timeObject = {
        "01": "13",
        "02": "14",
        "03": "15",
        "04": "16",
        "05": "17",
        "06": "18",
        "07": "19",
        "08": "20",
        "09": "21",
        "10": "22",
        "11": "23",
        "12": "12",
    }
    if(s === "12:00:00AM"){
        return "00:00:00"
    }
    if(s === "12:00:00PM"){
        return "12:00:00"
    }
    let result = /PM/.test(s); //find "PM" in input. getting boolean return.
    //if find "PM" in input then do this.
    if(result){
        let splited = s.split(":") //split the time according colon ":". get array in return.
        let value = splited[0];
        let twentyFourHour = timeObject[value]; //convrting from 12hr to 24hr using object.
        let removePM = splited[2].replace("PM", ""); //remove "PM" tag.        
        //making the 24hr format.
        let twentyFourHourFormat = `${twentyFourHour}:${splited[1]}:${removePM}`;
        return twentyFourHourFormat;
    }else {     //if find "AM" in input then do this.
        let removeAM = s.replace("AM", ""); //remove "PM" tag.
        //split the time according colon ":". get array in return.
        let splitedAM = removeAM.split(":"); 
        //if first index is "12" then convert in "00".
        if(splitedAM[0] === "12"){
            splitedAM[0] = "00";
        }
        //making the 12hr format.
        return `${splitedAM[0]}:${splitedAM[1]}:${splitedAM[2]}`;
    }
}

//sample-input will be a string
let input = "02:05:45PM"; //14:05:45
let input1 = "07:45:05PM"; //19:45:05
let input2 = "12:00:00PM"; //12:00:00
let input3 = "12:01:00PM"; //12:01:00 

let input4 = "07:05:45AM"; //07:05:45
let input5 = "12:00:00AM"; //00:00:00
let input6 = "12:01:00AM"; //00:01:00 
let input7 = "01:52:20AM"; //01:52:45 

// console.log(timeConversion(input1));


//-------------------------------------------------------------------------------


//Solution-2 (this is the concise way of above solution) solution-by-vinit.
function timeConversion2(s){
    let timeObject = {
        "01": "13",
        "02": "14",
        "03": "15",
        "04": "16",
        "05": "17",
        "06": "18",
        "07": "19",
        "08": "20",
        "09": "21",
        "10": "22",
        "11": "23",
        "12": "12",
    }
    if(s === "12:00:00AM"){
        return "00:00:00"
    }
    if(s === "12:00:00PM"){
        return "12:00:00"
    }
    let result = /PM/.test(s); 
    let removeAM_PM = result ? s.replace("PM", "") : s.replace("AM", "");
    let splited = removeAM_PM.split(":");
    //if find "PM" in input then do this.
    if(result){
        let twentyFourHour = timeObject[splited[0]]; 
        let twentyFourHourFormat = `${twentyFourHour}:${splited[1]}:${splited[2]}`;
        return twentyFourHourFormat;
    }else {
        if(splited[0] === "12"){
            splited[0] = "00";
        }
        let twelveHourFormat = `${splited[0]}:${splited[1]}:${splited[2]}`;
        return twelveHourFormat;
    }
}

// console.log(timeConversion2(input)); //14:05:45
// console.log(timeConversion2(input4)); //07:05:45


//---------------------------------------------------------------------------------


//Other solution
//Link-of-solution:- https://programs.programmingoneonone.com/2021/03/hackerrank-time-conversion-solution.html

//Solution
function timeConversion3(input){
    input = input.split(':');
    var hours = parseInt(input[0]);
    var timeFrame = input[2].slice(2);
    console.log("timeFrame", timeFrame);
    console.log("input", input);
    var seconds = input[2].slice(0,2);
    if ((timeFrame === 'PM') && (hours !== 12)) {
        hours += 12;
    }
    if ((hours === 12) && (timeFrame === 'AM')) {
        hours = '00';
    } else if (hours < 10) {
        hours = '0' + hours.toString();
    } else {
        hours = hours.toString();
    }
    console.log([hours, input[1], seconds].join(':'));
}

timeConversion3(input);
timeConversion3(input5);


//list of all methods which we have used to solve above problem.
//1. join()
//2. split()
//3. toString()
//4. slice()
//5. parseInt()
//6. replace()
//7. test()