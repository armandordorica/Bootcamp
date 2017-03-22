var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];

//creating our route
app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    //creating an array of friends
    
    //The first argument in the curly brackets is the friends object
    //the second friends argument in the curly brackets refers to the actual array
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    console.log(req.body.newfriend);
    //newfriend is the name property of the input tag
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    //To add it to the friends array, we push it
   res.redirect("/friends");
   
});

app.post("/addfriend", function(req, res){
     console.log(req.body);
   res.send("You have reached the post route"); 
    // var newFriend = req.body.newfriend;
    // friends.push(newFriend);
    // res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});