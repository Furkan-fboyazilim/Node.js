const events = require("events")



const eventFonk = (val) => {
    const eventEmitter = new events.EventEmitter()

    setTimeout(() => {

        for (var i = 0; i <= val; i++) {
            eventEmitter.emit("basla", i)
            console.log("İşlem sırası" + i)
            eventEmitter.emit("bitir", i)


        }


    }, 1000)

    return eventEmitter
}


const islem = eventFonk(3)

islem.on("basla", (i) => {
    console.log(i + ". işlem başladı")
})
islem.on("bitir", (i) => {
    console.log(i + ". işlem bitti")
})
