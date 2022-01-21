//requiring mongoose module
const mongoose = require('mongoose');

//connection
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true}); //making connection and looking for fruits db

//for the way we want data to be particularly structured (datatype)
const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: {
        rating : Number,
        // min:1,              //validation
        // max:10
    },
    review: String,
});

//mongoose model which takes 1st parameter as string (name of collection in singular)
//and second parameter as name of our schema which must stick to our schema
const fruit = mongoose.model("fruit", fruitSchema);

//creating a document from above model fruit
const fruitRecord = new fruit({
    name:"Apple",
    rating: 7,
    review:"pretty solid as a fruit"
});



//mongo 
//db
//to save the above fruit document into fruits collection inside our fruitsDB
// fruitRecord.save();

//then when we run app.js and show dbs in moongo shell we see
// > show dbs
// admin     0.000GB
// config    0.000GB
// fruitsDB  0.000GB
// local     0.000GB
// >

//that our fruits db gets added

// > show dbs
// admin     0.000GB
// config    0.000GB
// fruitsDB  0.000GB
// local     0.000GB
// > use fruitsDB
// switched to db fruitsDB
// > show collections
// fruits
// > db.fruits.find()
// { "_id" : ObjectId("61ea9d687388f46a804996cc"), "name" : "Apple", "rating" : 7, "review" : "pretty solid as a fruit", "__v" : 0 }
// >





const kiwi = new fruit({
    name: "kiwi",
    score: 10,
    review: "nice",
});

const mango= new fruit({
    name: "mango",
    score: 9,
    review: "yummy",
});

const orange = new fruit({
    name: "orange",
    score: 8,
    review: "healthy",
});




// CREATING
// to insert multiple docs it takes 2 parameters, 1st on eis an array, 2nd one is a callbk func
fruit.insertMany([kiwi, mango, orange], function(err){
    if (err){
        console.log(err);
    }else{
        console.log("success");
    }
});




//keep mongod server running
//in mongo shell 
//mongo
//db

// > db.fruits.find().pretty()
// {
//         "_id" : ObjectId("61ea9d687388f46a804996cc"),
//         "name" : "Apple",
//         "rating" : 7,
//         "review" : "pretty solid as a fruit",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61eab666c377c65dc53c9c7e"),
//         "name" : "kiwi",
//         "review" : "nice",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61eab666c377c65dc53c9c7f"),
//         "name" : "mango",
//         "review" : "yummy",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61eab666c377c65dc53c9c80"),
//         "name" : "orange",
//         "review" : "healthy",
//         "__v" : 0
// }
// >


//READING
fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    }else{
        // console.log(fruits);

        mongoose.connection.close();            //closing the connection along with the output
        fruits.forEach(function(fruit){          //looping thru array pof fruits and printing only fruit names
            console.log(fruit.name);
        });
    }
});


// PS C:\Users\Shre9\web\2_backend\06_mongoosejs\fruitsProject> node app.js
// Apple
// kiwi 
// mango
// orange


//UPDATE
fruit.updateOne({_id: " "} , {name : "peaches"}, function(){         //check in mongo shell, updating id to just name
    if (err){
        console.log(err);
    }else{
        console.log("success");
    }

});

// PS C:\Users\Shre9\web\2_backend\06_mongoosejs\fruitsProject> node app.js
// Apple
// kiwi 
// mango
// orange
//peach


//DELETE

fruit.deleteOne({
    name: "peach",
    function(){
        if (err){
            console.log(err);
        }else{
            console.log("success");
        }
    }
});

// PS C:\Users\Shre9\web\2_backend\06_mongoosejs\fruitsProject> node app.js
// Apple
// kiwi 
// mango
// orange


//you can give relationships btw 2 collections fruits anmd person in same db by embedding them
//embedding fruits in persons

//new mongoose.schema
const personSchema = new mongoose.Schema({
    name:"string",
    age: Number,
    favouriteFruit: fruitSchema
});

//mongoose.model(collectionname,schemaname)
const person = mongoose.model("Person","personSchema");

//favourite fruit embedd
const pineapple = new fruit({
    name: "pineapple",
    rating : 9,
    review: "wowwww",
});

//savingpineapple.save();

//new person to our docs
const personRecord = new person({
    name: 'John',
    age: 37,
});

//save the doc
personRecord.save();












