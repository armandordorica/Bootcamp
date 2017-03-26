var bodyParser = require("body-parser");
var mongoose       = require("mongoose");
var express        = require("express");
var app            = express();

//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));




//Setting up the schema
// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);


//CREATING AN INSTANCE OF A BLOG (for testing purposes)
// Blog.create({
//     title: "Test blog", 
//     image: "https://unsplash.com/photos/D9XX3Cjoh2s",
//     body: "Hello this is a blog post"
// });



//RESTFUL ROUTES
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING"); 
});

