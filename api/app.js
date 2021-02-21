const express = require('express');
const sqlite = require('sqlite3').verbose(); // not sure what the verbose is about

const app = express();

const {duck} = require('./duck');

const PORT = 6969;


// Serves a GET request to '/' and returns a JSON
app.get('/', function(req, res) {
    res.json({
        over: 9000,
        feel_like: "Shah Rukh Khan"
    });
});


// Demo of a function from another file
app.get('/duck', duck);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.listen(PORT, ()=>{console.log('Enabling matches on port ' + PORT)});
