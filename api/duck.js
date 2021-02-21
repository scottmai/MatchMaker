const express = require('express');
// const router = express.Router();

// an example for a route in a different file
function duck(req, res){
    res.json({
        i_am_that: 'duck'
    });
}

module.exports = {duck};