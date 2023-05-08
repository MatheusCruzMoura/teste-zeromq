// subber
const zmq = require("zeromq")

async function run() {
    const sock = new zmq.Subscriber

    sock.connect("tcp://127.0.0.1:3001")
    sock.subscribe("cat")
    sock.subscribe("relâmpago mcqueen")
    console.log("Subscriber conectado na porta 3001")
    
    for await (const [topic, msg] of sock) {
        console.log(`${topic.toString()}: ${msg.toString()}`)

        if (msg.toString() == 'Katchau!') console.log()
    }
}

run()