const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello world');
});

app.listen(80, function(req, res){
    console.log('running');
});
