var mongoose = require ('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name:String,
	email:String,
	password:String,
	confirmpass:String
},{Collection:'data',versionKey:false});


module.exports=mongoose.model('register', userSchema);


