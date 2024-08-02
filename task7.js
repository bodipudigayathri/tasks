var fs=require('fs');
fs.writeFile('apple.txt','could u understabd r not !',function(err,file){
	if(err) throw err;
	console.log('saved');

});