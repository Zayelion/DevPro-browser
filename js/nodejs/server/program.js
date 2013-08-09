var webSocketServer = require('websocket').server;
var http = require('http');
var dev = require('./dev');

var server = http.createServer(function(request, response) { });
server.listen(1337, function() { });

wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    console.log('[ws] new connection'); 
    connection.authenticated = false;
    
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            var data = JSON.parse(message.utf8Data);
			if (data.id === null || data.content === null)
				return;
            if (!this.authenticated)
            {
                if (data.id == dev.packet.Server.Login)
                {
                    this.authenticated = true;
                    
                    var devclient = new dev.DevClient("91.250.84.118", 8933, data.username, data.password);
                    devclient.web = this;
                    this.dev = devclient;
                    
                    devclient.on('packet', function(id, data) {
                        this.web.sendUTF(JSON.stringify({id: id, content: data}));
                    });

                    devclient.on('disconnected', function() {
                        this.web.sendUTF(JSON.stringify({id: -1}));
                        this.web.close();
                    });
                    
                    devclient.on('error', function() {
                        this.web.sendUTF(JSON.stringify({id: -1}));
                        this.web.close();
                    });
                }
            }
            else
            {
				this.dev.send(data.id, data.content);
            }
        }
    });

    connection.on('close', function(connection) {
        console.log('[ws] closed'); 
        if (this.authenticated)
            this.dev.close();
    });
});
