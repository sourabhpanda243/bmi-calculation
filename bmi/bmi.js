const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var w=Number(req.body.weight);
    var h=Number(req.body.height;
    var c=w/(h*h);
    res.send("BMI : "+c);
});
app.listen(3000);