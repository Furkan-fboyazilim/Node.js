
const http = require('http')

const sunucu = http.createServer(function (request, response) {

    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
  
    if (request.url == '/' || request.url == '/anasayfa') {
  
      response.write('Burası anasayfa');
  
    } else if (request.url == '/iletisim') {
  
      response.write('Burası iletişim sayfası');
  
    } else {
  
      response.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8'
      });
  
      response.write('Böyle bir sayfa mevcut değil');
  
    }
  
    response.end();
  
  });
  
  sunucu.listen(1000);
  
  console.log('Sunucu çalışıyor...');


// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {

//     // if (req.url === '/') {
//     //     res.setHeader('Content-Type', 'text/plain')
//     //     res.statusCode=200
//     //     res.statusMessage="success"
//     //     res.write('test1')
//     //     res.end()

//     // }
//     // if (req.url === '/products') {
//     //     res.write("products")
//     //     res.end()

//     // }

//     fs.readFile('index.html', (err, data) => {
//         if (err) {
//             res.setHeader('Content-Type', 'text/plain')
//             res.statusCode = 404
//             res.statusMessage = "error"
//             res.end("Hata var")
//         } else {
//             res.setHeader('Content-Type', 'text/html')
//             res.statusCode = 200
//             res.statusMessage = "success"
//             res.end(data)
//         }
//     })

// })
// server.listen(3000, () => {
//     console.log("listening port 300");

// })


