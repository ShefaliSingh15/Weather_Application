var express = require('express');
var mongoose = require('mongoose');
var user = require('../model/schema');
var router=express.Router();
router.put('/:humidity',function(req,res){
		
	user.update({"humidity":req.params.humidity},
		{$set:{"description":req.body.description}},
		function(err,work){
           if(err){
           	res.json('here');
           }
           else
            res.json(work);}
		
		)
})
module.exports=router;
