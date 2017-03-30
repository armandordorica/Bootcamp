var mongoose = require("mongoose");
var Campground = require("./models/campground");



function seedDB(){
    //wipe everything from the db - REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds");
    });
}

module.exports = seedDB; 