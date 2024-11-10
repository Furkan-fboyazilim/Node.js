const { log } = require('console');
const fs = require('fs');
const { loadEnvFile } = require('process');

global.ad = "fbo"


fs.writeFileSync('deneme.txt', "FUrkan berk oğuzhan", (err, e) => {
    console.log(err, e)
})

fs.appendFile('deneme.txt', 'Hello Worlddd', (err, data) => {

    if (err) {
        console.log(err);
    }
    else {
        console.log("Dsoya oluşturuldu.");

    }
})


fs.readFileSync('deneme.txt', 'utf-18', (err, data) => {

    try {
        err = 1
        if (err) throw "asd"
        console.log(data);

    }
    catch (err) {
        console.log(err);

    }

})



const data = fs.readFileSync("deneme.txt", "utf-8")
console.log(data)



