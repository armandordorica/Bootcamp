var express = require("express");
var app = express(); 

// Simple application that when you go to "/" ==> 
// "Hi there "
// "bye" ==> "Goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye.");
});

app.get("/dog", function(req, res){
    
    console.log("Someone made a request to /dog")
    res.send("MEOW!!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
   console.log(req.params);
    res.send("Welcome to the comments page!!");
});

app.get("/r/:subredditName", function(req,res){
     var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " page.");
});
// "/dog" ==> "MEOW"

//This will run whenever our app gets a get request to a nonvalid URL
//This is how we handle errors 

// Defining a route: first parameter takes a route and then
// a callback function that takes a request and response: 
app.get("/", function(req, res){
    //req is an object that contains all the information
    //that triggered this route
    //response will take all the information that we will going 
    //to respond with
    res.send("Hi there");
})

app.get("*", function(req, res){
    res.send("You are a star!");
})

//method that express gives us to listen to different requests
//You need to provide the port to listen on
//You can listen on port 3000 but since we're on c9, 
//we listen on process.env.PORT it returns the cloud 9 server port
//that we need to use. The environment variable that we're working on 
//is called PORT
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has starteddddddddddd");
});