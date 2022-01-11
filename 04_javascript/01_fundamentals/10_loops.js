// while loop for fizzbuzz, be careful bcoz it might go into infinite loop if we dont increment the counter

var arr = [];
count = 1;

function fizzbuzz(){
    while(count<=100){
        if(count %3===0 && count %5===0){
            arr.push("fizzbuzz");
        }
        else if (count %3===0){
            arr.push("fizz");
        }
        else if (count %5===0){
            arr.push("buzz");
        }
        else{
            arr.push(count);
        }

           count++;

    }
     console.log(arr);

}