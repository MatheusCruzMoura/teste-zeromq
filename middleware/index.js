const zmq = require('zeromq');

async function runServer() {
    const sock = new zmq.Reply();

    await sock.bind('tcp://*:5555');

    console.log('Middleware rodando')

    for await (const [msg] of sock) {
        console.log('Recebido: ' + msg.toString());

        const sockServer = new zmq.Request();
        sockServer.connect('tcp://localhost:5556');

        let mensagem = 'Quem é você?'
        console.log('Enviando ao servidor:', mensagem);
        await sockServer.send(mensagem);
        const [result] = await sockServer.receive();
        console.log('Recebido do servidor:', result.toString());
        console.log('Enviando:', result.toString());
        await sock.send(result.toString());
    }
}

runServer();
