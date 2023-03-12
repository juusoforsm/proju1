const express = require('express');
const app = express();
const fs = require('fs');


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});