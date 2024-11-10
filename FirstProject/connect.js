

const connect = require("connect")
const logModule = require("./connectLogModule")
const app = connect()

app.use(logModule())
app.use((req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    next()
})

app.use(function (request, response, next) {

    response.write('Hoşgeldiniz <br/ >');
  
    response.write('Sistem saati : ' + new Date(request.zaman).toLocaleTimeString());
  
    response.end();
  
  });
app.use('/anasayfa', (req, res, next) => {

    res.write('Burası anasayfa')
    res.end()
})
app.use('/iletisim', (req, res, next) => {

    res.write('Burası iletişim')
    res.end()
})

app.listen(1455, () => {
    console.log("başladı");

})