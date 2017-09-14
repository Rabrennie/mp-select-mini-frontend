const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    if (message.split(' ')[0] === 'M20') {
      ws.send('Begin file list\none.gcode\ntwo.gcode\nEnd file list');
    }

  });

  ws.send('something');
});
