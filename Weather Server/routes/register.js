var express = require('express');
var mongoose = require('mongoose');
var user = require('../model/Schema');
var router=express.Router();
router.post('/',function(req,res){
	console.log(req.body);
	
	var obj = new user({
	name:req.body.name,
	email:req.body.email,
	password:req.body.password,
	confirmpass:req.body.confirmpass
	
});
	obj.save(function(err,result){
		if(err){
			res.json('err');
		}
		else res.json(result);
	})
})

module.exports = router;
