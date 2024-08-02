var http=require('http');
var fs=require('fs');
http.createServer(function (req,res){
fs=readFile('client.html',function(err,date){
res.writeHead(200,{'Content-Type': 'text/html'});
	
	res.write(date);
	return res.end();

});
}).listen(5000);
