//client app to send command file to the server
  var fs = require('fs');
  var socket = require('socket.io-client')('https://paperpiano.herokuapp.com/');
  socket.on('connect', function(){
  	console.log("Client connected.");
  	console.log("Prepared to send the file.");

  	//first read the file
	 
	fs.readFile('./test.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  console.log('Successful read!');
	  socket.emit('code received', data);
	  console.log('Successful sending!');
	});
  	

  });

  //this should read the command
  socket.on('code received', function(data){
  	console.log(data);
  	//write it to a file
  	var wstream = fs.createWriteStream('temp.txt');
  	wstream.write(data);
  	wstream.end(function () {console.log('writing done!');});
  });
  socket.on('disconnect', function(){});