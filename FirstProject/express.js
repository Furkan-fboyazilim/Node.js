'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.redirect('/giris');
    // res.redirect('https://www.yusufsezer.com.tr');
    // res.sendFile(__dirname+"/index.html");
    // res.send('<h1>Merhaba Express</h1>');

});

app.post('/', function (req, res) {
    res.send('Merhaba Express post');
});

app.listen(1453, function () {
    console.log('Sunucu çalışıyor...');
});