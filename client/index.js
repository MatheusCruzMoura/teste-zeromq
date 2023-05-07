const zmq = require('zeromq');

async function runClient() {
    const sock = new zmq.Request();
    sock.connect('tcp://localhost:5555');

    let mensagem = 'Quem é você?'
    console.log('Enviando:', mensagem);
    await sock.send(mensagem);
    const [result] = await sock.receive();
    console.log('Recebido:', result.toString());
}

runClient();
