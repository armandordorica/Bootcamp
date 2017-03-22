var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink", 
        cow: "Mooo!", 
        dog: "Woof Woof!"
    }
   var sound = sounds[animal];
    res.send("This is speak. Animal is " + sound);

});

app.get("/repeat/:message/:number", function(req, res) {
    var num = Number(req.params.number); 
    var message = req.params.message;
    var result = "";
    for(var i=0; i<num; i++){
        result+= " " + message;
        
    }
    res.send(result);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Now serving your app!"); 
});