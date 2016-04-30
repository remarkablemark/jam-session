(function(window, socket){
  socket.on('connect', function() {
    console.log('Connected!');
  });
  socket.on('ping', function(ping) {
    console.log(ping);
  });
})(window, window.socket);
