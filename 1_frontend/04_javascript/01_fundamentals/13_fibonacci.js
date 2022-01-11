// third number is the addition of first 2 numbers
//we must get the output in an array
//use flowchart and write code
//take an array, use funtion with input n
//use if else if else statements
//use for loop
//print the output


var a = [];

function fibonacciGenerator(n){                             // first check for the first 2 numbers
    if(n===1){                                              //if the input is 1 then add 0 (1 elemnt in the array)
        a= [0];
    }

    else if(n===2){                                         //if the input is 2 then add 0 and 1 (2 elements in the array)
        a = [0,1];
    }

    else{  
        a = [0,1]; //same + for loop                                                 //if the input is neither 1 or 2 then add
        for(var i=2; i<n; i++){
            a.push(a[a.length-2]+a[a.length-1]);            ////arr.push(arr[0] + arr[1]); //output at position 1 and 2
        }
    }

    return a;

}

a = fibonacciGenerator(10);
console.log(a);