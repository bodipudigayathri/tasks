var http=require('http');
var uc=require('upper-Case');
http.createServer(function (req,res){

res.writeHead(200,{'Content-Type': 'text/html'});
res.write(uc.uppercase("wish u all success"))	
res.end();


}).listen(8080);
