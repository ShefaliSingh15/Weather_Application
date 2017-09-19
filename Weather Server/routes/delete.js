var express = require('express');
var mongoose = require('mongoose');
var user = require('../model/schema');
var router=express.Router();
router.delete('/:dt_txt',function(req,res){
	user.findOneAndRemove({"dt_txt":req.params.dt_txt},
		function(err,result){
			if(err){
				res.json('err');
			}
			else
				res.json(result);
			
		}
		);
});
module.exports=router;
