// collection of simalar items placed together



// //create an array and store inside a variable
// var guestList = ["riya", "shreya", "sanvi", "shravya", "kavya"]

// //to retrieve the data 
// console.log(guestList[2]); //it gives shreya



// var guestName = prompt("enter your name");
// console.log(guestName);

// var guestList =  ["riya", "shreya", "sanvi", "shravya", "kavya"];

// function arr() {
//     guestList[0];
//     guestList[1];
//     guestList[2];
//     guestList[3];
//     guestList[4];
//     guestList[5];
// }

// if (arr() === guestName){
//     alert("welcome " + guestName);
// }else{
//     alert("sorry! maybe next time");
// }


// the above example wont Worke
// to check our data with user data we use array.includes() method



var guestList =  ["riya", "shreya", "sanvi", "shravya", "kavya"];

var guestName = prompt("enter your name");

if(guestList.includes(guestName)){
    alert (" welcome " + guestName);
}
else{
    alert("maybe later");
}


















