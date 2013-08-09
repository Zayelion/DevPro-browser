var net = require('net');
var events = require('events');
var crypto = require('crypto');
var packet = require('./devpacket');

function encodePassword(password)
{
    var hmac = crypto.createHmac('md5', '&^%\xc2\xa3$Ugdsgs:;');
    hmac.update(password);
    return hmac.digest('base64');
}

function DevClient(address, port, username, password) {
    events.EventEmitter.call(this);
    
    this.address = address;
    this.port = port;
    
    this.username = username;
    this.password = password;
    
    this.client = net.connect(port, address);
    this.client.dev = this;
    this.client.buffer = new Buffer(0);

    this.send = function(id, content)
    {
        var data = new Buffer(content);
        var header = new Buffer(3);
        header.writeUInt8(id, 0);
        header.writeUInt16LE(data.length, 1);
        this.client.write(Buffer.concat([header, data]));
    };
    
    this.close = function()
    {
        this.client.destroy();
    };
    
    this.client.on('connect', function() {
        var auth = {
            username: this.dev.username,
            password: encodePassword(this.dev.password),
            uid: "Tenkei0NodeJS0WebTest0"
        };
        this.dev.send(packet.Server.Login, JSON.stringify(auth));
    });

    this.client.on('data', function(data) {
        this.buffer = Buffer.concat([this.buffer, data]);
        buffer = this.buffer;
        
        while (true)
        {
            if (buffer.length < 1)
                return;
            
            var id = buffer.readUInt8(0);
            var hlen = 1;
            var len = 0;
            if (!packet.isOneByte(id))
            {
                if (packet.isLarge(id))
                {
                    if (buffer.length < 5)
                        return;
                    hlen = 5;
                    len = buffer.readUInt32LE(1);
                }
                else
                {
                    if (buffer.length < 3)
                        return;
                    hlen = 3;
                    len = buffer.readUInt16LE(1);
                }
            }
            if (buffer.length < hlen + len)
                return;
            
            var data = buffer.toString('utf8', hlen, hlen + len);
            
            var available = buffer.length - hlen - len;
            var nBuffer = new Buffer(available);
            if (available != 0)
            {
                buffer.copy(nBuffer, 0, len + hlen, buffer.length);
            }
            buffer = nBuffer;
            this.buffer = buffer;
            
            this.dev.emit('packet', id, data);
        }
    });

    this.client.on('error', function() {
        this.dev.emit('error');
    });
    
    this.client.on('end', function() {
        this.dev.emit('disconnected');
    });
}
DevClient.prototype.__proto__ = events.EventEmitter.prototype;

exports.DevClient = DevClient;
exports.packet = packet;
