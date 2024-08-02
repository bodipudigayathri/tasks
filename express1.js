var express=require('express');
var app=express();
app.get('/nagalakshmi',function(req,res){
	res.send("Welcome to express js world tested by sammmmm");
	
});
app.listen(3000);
