(function(window, socket, $) {
  'use strict';

  // draw piano keyboard
  new window.AudioSynthView().draw();

  socket.on('connect', function() {
    console.log('Connected!');
  });

  socket.on('playNote', function(data) {
    console.log('playNote', data);
    window.fnPlayNote(data.note, data.octave);
  });

})(window, window.socket, window.jQuery);
