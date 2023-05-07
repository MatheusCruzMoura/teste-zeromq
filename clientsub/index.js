// subber
const zmq = require("zeromq")

async function run() {
    const sock = new zmq.Subscriber

    sock.connect("tcp://127.0.0.1:3001")
    sock.subscribe("kitty cats")
    console.log("Subscriber conectado na porta 3001")

    for await (const [topic, msg] of sock) {
        console.log(`[${new Date().toLocaleString()}] Recebeu uma mensagem relacionada a: ${topic.toString()}, Conteudo da mensagem: ${msg.toString()}`)
    }
}

run()