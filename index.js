const express = require('express');
const app = express();
const fs = require('fs');


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/guestbook', function (req, res) {
    res.sendFile(__dirname + '/public/guestbook.html');
});

app.get('/newmessage', function (req, res) {
    res.sendFile(__dirname + '/public/newmessage.html');
});

app.get('/ajaxmessage', function (req, res) {
    res.sendFile(__dirname + '/public/ajaxmessage.html');
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});