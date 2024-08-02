var fs=require('fs');
fs.rename('apple.txt','banana.txt',function(err,file){
	if(err) throw err;
	console.log('File rename');

});