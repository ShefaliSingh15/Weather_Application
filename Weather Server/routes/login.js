var express = require('express');
var mongoose = require('mongoose');
var users = require('../model/Schema');
var router=express.Router();
router.post('/', function(req, res) {
  users.find({"email":req.body.email,
	          "password":req.body.password}, function(err, user) {
    if(err)
      console.log(err);
      
    else
      res.json(user);

    
  });
});

module.exports = router;
