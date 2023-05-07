// worker
const zmq = require("zeromq")

async function run() {
    const sock = new zmq.Pull

    sock.connect("tcp://127.0.0.1:3000")
    console.log("Worker conectado à porta 3000")

    for await (const [msg] of sock) {
        console.log(`[${new Date().toLocaleString()}] Work: ${msg.toString()}`)
    }
}

run()
