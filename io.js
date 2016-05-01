'use strict';

/**
 * Module dependencies.
 */
var debug = require('debug')('jam-session:socket');

/**
 * Export Socket.IO.
 */
module.exports = function io(server) {
  var io;

  // pass server 
  try {
    io = require('socket.io')(server);
  } catch(err) {
    debug(err);
  }

  // client connected
  io.on('connection', function(socket) {
    debug('Connected!');

    socket.on('pressNote', function(data) {
      debug('pressNote', data);
      io.sockets.emit('playNote', data);
    });

    // client disconnected
    socket.on('disconnect', function() {
      debug('Disconnected!');
    });
  });
};
