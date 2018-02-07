const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.send('Hello world');
});

app.listen(port, function(req, res){
    console.log('app is running');
});
