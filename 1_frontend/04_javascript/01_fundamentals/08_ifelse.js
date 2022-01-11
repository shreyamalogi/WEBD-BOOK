
// to add numbers from 1 to 100 we use variabl;e count and incriment it by 1


var n = [];    //declaring an empty array
var count = 1;

function fizzbuzz(){

    if(count % 3 ===0 && count % 5 ===0){ //first mandatory to keep an if which satisfies both the conditions then other statements could be written as else if
           n.push("fizzbuzz");            //div by 3 and 5 print fizzbuzz              return("fizzbuzz"); 
    }

    else if(count % 3 === 0){ //div by 3, print fizz
        n.push("fizz");           //dont use return
    }

    else if (count % 5 === 0){//div by 5, print buzz
        n.push("buzz");
    }
    
    else{
        n.push(count);
    }

    count++;

  

    console.log(n);
}




// (15) [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']
