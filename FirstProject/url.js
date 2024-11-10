const url = require("url")

const adres = url.parse('https://user:pass@sub.host.com:1453/p/a/t/h?query=string&query1=text#hash')

console.log(adres)


const newUrl = url.format({
    protocol:"http",
    hostname:"fboyazılım",
    port:"1905",
    pathname:"index.html"
})
console.log(newUrl)