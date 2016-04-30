(function(window, socket, $){
  socket.on('connect', function() {
    console.log('Connected!');
  });
  socket.on('ping', function(ping) {
    //console.log(ping);
  });
  socket.on('playSound', function (sound) {
    console.log('playSound!', sound);
  });
  $(document).ready(function () {
    console.log('ready!!!');
    $('.sound').on('click', function () {
      console.log('click!!', arguments, $(this).data('mp3'));
      socket.emit('soundPressed', $(this).data('mp3'));
    });
  });
})(window, window.socket, window.jQuery);