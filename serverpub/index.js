// pubber
const zmq = require("zeromq")

async function run() {
    const sock = new zmq.Publisher()

    await sock.bind("tcp://127.0.0.1:3001")
    console.log("Publisher na porta 3001")

    while (true) {
        console.log(`[${new Date().toLocaleString()}] Enviando um envelope de mensagem com várias partes`)
        await sock.send(["cat", "Miiaaaauuu!"])
        await sock.send(["relâmpago mcqueen", "Katchau!"])
        await new Promise(resolve => { setTimeout(resolve, 5000) })
    }
}

run()