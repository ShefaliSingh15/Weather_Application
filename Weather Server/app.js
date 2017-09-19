var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/config');
var mongoose = require('mongoose');
var saveUsers = require('./routes/saveUsers');
var index = require('./routes/');
var update = require('./routes/update');
var deletee = require('./routes/delete');
var register = require('./routes/register');
var login = require('./routes/login');
var cors = require('cors');

var router=express.Router();

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/saveUsers',saveUsers);
app.use('/',index);
app.use('/update',update);
app.use('/delete',deletee);
app.use('/register',register);
app.use('/login',login);

mongoose.connect(config.dbase);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error Occured'))

http.createServer(app).listen(8080,'127.0.0.1');


