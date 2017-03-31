var mongoose = require("mongoose"); 
//setting up our mongoose schema 
var campgroundSchema = new mongoose.Schema({
    name: String, 
    image: String, 
    description: String, 
    comments: [
        {   
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

//Compile the schema into our model 
module.exports= mongoose.model("Campground", campgroundSchema);