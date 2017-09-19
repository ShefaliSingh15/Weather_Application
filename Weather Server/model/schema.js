var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	City:String,
	dt_txt:{type:String,unique:true},
	humidity:Number,
	description:String
},{Collection:'data',versionKey:false});
module.exports=mongoose.model('users', userSchema);
