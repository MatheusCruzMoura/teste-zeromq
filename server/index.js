const zmq = require('zeromq');

async function runServer() {
    const sock = new zmq.Reply();

    await sock.bind('tcp://*:5556');

    console.log('Servidor rodando')

    for await (const [msg] of sock) {
        console.log('Recebido: ' + msg.toString());
        console.log('Enviando: Irineu, você não sabe nem eu!')
        await sock.send('Irineu, você não sabe nem eu!');
    }
}

runServer();
