/*
normal year 365 days
leap year 366 days

hints:
1) it should be cleanly divisible by 4
2) it should not be divisble by 100
3)it should be cleanly divisible by 400

*/
var leapInput = prompt("enter the year : ");
console.log(leapInput);

if(leapInput % 4 == 0 && leapInput % 100 !=0 || leapInput % 400==0 ){
    alert("it is a leap year");

}else{
    alert("it is not a leap year");
}


// to write it inside function without prompts and alerts

function isLeap(year) {
    
    
    if(year % 4 == 0 &&  year % 100 !=0 || year % 400==0 ){
        return("Leap year.");
    
    }else{
        return(" Not leap year.");
    }
    
 }


 isLeap(2022);

//  var leapYearCheck = isLeap(2024);
// console.log(leapYearCheck);










