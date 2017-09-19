var express = require('express');
var mongoose = require('mongoose');
var user = require('../model/schema');
var router=express.Router();
router.post('/',function(req,res){
	console.log(req.body);
	var obj = new user({
	dt_txt:req.body.dt_txt,
	humidity:req.body.humidity,
	description:req.body.description
});
	obj.save(function(err,result){
		if(err){
			res.json('err');
		}
		else res.json(result);
	})
})

module.exports = router;
