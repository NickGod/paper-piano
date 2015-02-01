//server js that accepts the file and broadcast it to clients

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log("A user has connected.");
  socket.on('code received', function(data){
  	//send data to all listening clients.
  	console.log("File received. Send it to all clients.")
  	console.log(data);
    io.emit('code received', data);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log(process.env.PORT);
  console.log('listening...');
});