var express=require('express');
var app=express();
app.get('/home',function(req,res){
	res.send("Welcome to home page!");

});
app.post('/contact',function(req,res){
	res.send("you just called the post method at '/contact'!\n")
});
app.all('/test',function(req,res){
	res.send("HTTP method doesn't have any effect on thuis route!")
});
app.listen(3000);