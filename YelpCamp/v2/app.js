var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//connect mongoose to the db
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


//setting up our mongoose schema 
var campgroundSchema = new mongoose.Schema({
    name: String, 
    image: String
});

//Compile the schema into our model 
var Campground = mongoose.model("Campground", campgroundSchema);

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
];

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }else {
//             console.log("Newly created campground: ");
//             console.log(campground);
//         }
//     });
// //Adding landing page 
// app.get("/", function(req, res){
//     res.render("landing");
// });

app.get("/campgrounds", function(req, res){
    //Get all campgrounds from the db 
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds",{campgrounds:allCampgrounds});
        }
    });
    // res.render("campgrounds",{campgrounds:campgrounds});

     //{nameYouWantToGiveIt: DataYourePassingIn}
});
       
       

app.post("/campgrounds", function(req, res){
    //route when you create a new background 
    //get data from form and add to campgrounds array
    //redirect back to campgrounds page 
    var name = req.body.name;
    var image = req.body.image;
    var newCampground  = {name: name, image: image};
    //Create a new campground and save it to the database
    
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else{
            //redirect back to campgrounds page
              res.redirect("/campgrounds");
        }
    });

});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});