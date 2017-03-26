var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    temperament: String
});

// The schema tells mongoose that I want to add
//cats into my database and that these are the arguments that a cat should expect. 

var Cat = mongoose.model("Cat", catSchema);
//now we can use this variable Cat to make new cats, define cats, remove cats, update cats...
//A model will have the pattern you define in the schema with all the methods that you need


// //adding a new cat to the database 
// var george = new Cat({
//     name:"Mrs. Norris", 
//     age: 7, 
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     }else{
//         console.log("We just saved a cat to the db");
//         console.log(cat);
        
//     }
// }); //
//cat is what is being sent back from the db
//the .save function takes time, so to account for that delay we use the callback fn

//The create function is like new and save all at once.
Cat.create({
   name: "Snow white",
   age: 15, 
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
});
//retrieve all cats from the database and console.log each one 
Cat.find({}, function(err,cats){
    if(err){
        console.log("Oh no, error!");
        console.log(err);
    }else{
        console.log("ALL the cats");
        console.log(cats);
    }
});