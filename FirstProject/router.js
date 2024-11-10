'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const fboRouter = express.Router();

const site = require('./siteRouter.js')
const user = require('./userRouter.js')

// router.get('/', function (req, res) {
//   res.send('Kullanıcı işlemleri');
// });

// router.post('/', function (req, res) {
//   res.send('Kullanıcı işlemleri POST isteği');
// });

// router.put('/', function (req, res) {
//   res.send('Kullanıcı işlemleri PUT isteği');
// });

// router.delete('/', function (req, res) {
//   res.send('Kullanıcı işlemleri DELETE isteği');
// });

// router.route('/')
//     .get((req, res) => { res.send("gettest") })
//     .post((req, res) => { res.send("posttest") })

// fboRouter.route('/fbo')
//     .get((req, res) => { res.send("bursa") })

app.use('/', site);
app.use('/kullanici', user);

app.listen(1453, function () {
    console.log('Sunucu çalışıyor...');
});