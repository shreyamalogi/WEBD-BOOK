// bmi = weight/height*height


function bmiCalculator(weight,height){
    var bmiCalci = weight/(Math.pow(height,2));

    if(bmiCalci < 18.5){
        return ("Your BMI is " + bmiCalci + ", so you are underweight." );
    }
    
    if(bmiCalci == 20 ){
        return ("Your BMI is " + bmiCalci + ", so you have a normal weight." );
    }
    
    else{
        return ("Your BMI is " + bmiCalci + ", so you are overweight." );
    }
}


BMI(40,1.5);