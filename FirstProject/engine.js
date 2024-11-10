
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        baslik: "FBO",
        konu: "testest",
        adi: 'furkan',
        soyadi: 'berk'
    })
})

app.listen(1905, () => {
    console.log("başladı");

})