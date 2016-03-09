Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.1.83:8545/"));

var output = '';

web3.eth.getBlock(1, function(error, result){
    if(!error)
    {
        console.log(result);
        output = result;
      }
    else
    {
        console.error(error);

      }

})

var io = require('socket.io')(5001);
//var io = initSockets();

//allow clients to join and leave rooms
io.sockets.on('connection', function (socket) {

    console.log('got connection with ' +socket.toString())

    socket.on('subscribe', function(data) { socket.join(data.room); })

    socket.on('unsubscribe', function(data) { socket.leave(data.room); })

});

  var room_name = 'default_room'

io.sockets.in(room_name).emit('ethereum_data', output);
console.log('emitted '+ JSON.stringify(output));
