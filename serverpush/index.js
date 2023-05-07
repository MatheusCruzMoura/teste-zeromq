// producer
const zmq = require("zeromq")

async function run() {
    const sock = new zmq.Push()

    await sock.bind("tcp://127.0.0.1:3000")
    console.log("Producer na porta 3000")

    while (true) {
        await sock.send("Vai trabalhar!")
        await new Promise(resolve => { setTimeout(resolve, 3000) })
    }
}

run()