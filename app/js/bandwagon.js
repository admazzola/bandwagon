


var room_name = 'default_room';

var socket = io('http://127.0.0.1:5001');

console.log('connecting to socket');
console.log(socket);

socket.emit("subscribe", { room: room_name });

socket.on("roomChanged", function(data) {
    console.log("roomChanged", data);
});


//we add a random seed to the channel to make it my own private channel
socket.on(('ethereum_data'), function(data){

  console.log( (data));



});
