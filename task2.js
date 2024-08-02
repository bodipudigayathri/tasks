var http=require('http');
http.createserver(function (req,res)

{
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write('Hello World! i am gayio ');
	res.write(res.url);
	res.end();

}).listen(5000);