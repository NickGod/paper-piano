  var socket = require('socket.io-client')('http://localhost:5000');
  socket.on('connect', function(){
  	console.log("Client connected.");
  });
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});