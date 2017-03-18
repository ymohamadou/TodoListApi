'use strict';

let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require('mongoose');
let Task = require('./api/models/todoListModel');
let body_parser = require('body-parser');
let routes = require('./api/routes/todoListRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

routes(app);
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + ' not found'})
});
// start the server
app.listen(port);

console.log('Todo list RESTful API Server started on : ' + port);


