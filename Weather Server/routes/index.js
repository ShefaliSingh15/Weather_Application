var express = require('express');
var mongoose = require('mongoose');
var user = require('../model/schema');
var router=express.Router();

router.get('/', function(req, res, next){
  user.find({},function(err,user){
  	if(err)
  		console.log(err);
  		
  	else
  		res.json(user);
  	})
});

module.exports=router;
