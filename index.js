const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/img/'));

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

app.get('/json', function (req, res) {
    if (!fs.existsSync('public/guestbook.json')) {
        fs.writeFileSync('./public/guestbook.json', '[]');
    }

    res.sendFile(__dirname + "/public/guestbook.json");
})


app.get('*', function (req, res) {
    res.setHeader('content-type', 'text/plain');
    res.status(404).send('404 not found');
});

app.post('/addmessage', function (req, res) {
    if (!fs.existsSync('./public/guestbook.json')) {
        fs.writeFileSync('./public/guestbook.json', '[]');
    }
    let data = require('./public/guestbook.json');

    data.push({
        "username": req.body.username,
        "country": req.body.country,
        "message": req.body.message,
        "date": Date()
    })
    let text = JSON.stringify(data, false, 4)
    fs.writeFile('./public/guestbook.json', text, (err) => {
        if (err) throw err;
        console.log('You actually did it!');
    })
    res.send(data);

})

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});