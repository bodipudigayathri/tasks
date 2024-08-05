const mongoose=require('mongoose')
const Schema=mongoose.Schema
const passportLocalMongoose=require('passport-local-mongoose');
var Country =new Schema({
	c_id:{
		type:String
	},
	c_name:{
		type:String
	}
	c_dob:{
		type: Date
	}
	c_address:{
		type:String
	}
})
country.plugin(passportLocalMongoose);
module.exports=mongoose.model('Country',Country)