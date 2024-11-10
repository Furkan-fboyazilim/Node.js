
const interval = setInterval(() => {
    console.log("merak")
}, 1000)

const timeOut = setTimeout(() => {

    clearInterval(interval)
}, 3000)

console.log("fbo")


console.log(process.memoryUsage())
