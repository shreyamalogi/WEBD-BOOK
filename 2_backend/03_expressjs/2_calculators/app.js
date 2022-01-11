//jshint esversion:6

// so what happend when we click calculate
//so go to chrov dev tools , network 

//the body parser allows you to go into ur routes
//req.body ki poi console log cheste console lo user em em inputs ichado telustadi 
//so cdt lo network ki poi chuse pani undadu

//dont create seperate js files for logic but istead make routes



//install and require the two packages and store it in a const
const express = require("express"); //imports express package
const bodyParser = require("body-parser"); //imports bodyparser 

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //body parser works with express to pass the data that comes from the html form
//app.use(bodyParser.json())



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

//edaithe info user manaki icado avi server lo store cheyaniki post method
//so user manki info ichaka em code execute cheyali...

//home route lo addition calculator
app.post("/", function(req, res) {

    var num1 = Number(req.body.n1); //to getr parsed as a number or integer we mention the datatype number
    var num2 = Number(req.body.n2); //n1 and n2 are the values in the form

    var result = num1 + num2;

    res.send("the answer is = " + result); //append the results variabe to the string
});



//bmiroute lo bmi calculator
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {

    var weight = parseFloat(req.body.weight); //datatype is float so parseloat
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);


    res.send("your BMI is = " + bmi); //res.send method is for sending the response from the server to the browser as an output
});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});