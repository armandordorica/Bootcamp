var mongoose = require("mongoose");
var Campground = require("./models/campground");

var Comment = require("./models/comments");

var data = [
        {name: "Cloud's rest",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg", 
        description: "blah blah blah"
        }, 
        {name: "Desert Nesa",
        image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg", 
        description: "blah blah blah"
        }, 
        {name: "Good stuff",
        image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg", 
        description: "blah blah blah"
        } 
    ]


function seedDB(){
    //wipe everything from the db - REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds");
     //ADD A FEW CAMPGROUNDS
    // loop through data and create a campground for each instance in the data array
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
           if(err){
               console.log(err)
           }else{
               console.log("added a campground");
                   //ADD A FEW COMMENTS 
                Comment.create(
                    {
                        text: "This place is great", 
                        author: "Homer"

                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
           }
       });
   });
    });
    
   

}

module.exports = seedDB; 