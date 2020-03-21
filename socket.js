module.exports = function (http) {
  const io = require('socket.io')(http)
  const socket = require('socket.io-client')();
  module.itemsUpdate = ( idEvent ) => {
    const nsp = io.of(`/party/${idEvent}`);
    nsp.on('connection', (socket) => {
        console.log('someone connected');
    });
    nsp.emit('updatItems', 'everyone!');
  };
  return module;
};


