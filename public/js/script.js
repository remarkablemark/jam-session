(function(window, socket, $, Tone) {
  'use strict';

  socket.on('connect', function() {
    console.log('Connected!');
  });

  socket.on('playSound', function (sound) {
    var player = new Tone.Player({
      url : '/sounds/ff-064.wav',
      autostart: true
    }).toMaster();
    Tone.Buffer.on('load', function () {
      player.start();
    });
  });

  $(document).ready(function () {
    $('.sound').on('click', function () {
      socket.emit('soundPressed', $(this).data('mp3'));
    });
  });
})(window, window.socket, window.jQuery, window.Tone);