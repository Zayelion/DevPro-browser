//Buttys node ws-tcp-bridge --method=ws2tcp --lport=9999 --rhost=86.0.24.143:9999
//EU node ws-tcp-bridge --method=ws2tcp --lport=9999 --rhost=91.250.84.1181:9999
// encodedPassword 1MY5XPo/v7dqOhWNi+faoQ==
//

var encodedPassword	= '1MY5XPo/v7dqOhWNi+faoQ==';
var username 		= 'testBrowser';
var UID				='123456789123456789';

function __WSTCPBridge(externalhost){
		
		
		
		
		this.socket 			= new WebSocket(externalhost);

		this.socket.onmessage	= function (e) {onmessage(e)};
		this.socket.onopen		= function (e) {onconnection(e)};
		
}
// function __WebTCPserverConstruct(internalip, internalport, externalip, externalport){
// 		options = {
// 		  encoding: "uft-8",
// 		  timeout: 0,
// 		  noDelay: true, // disable/enable Nagle algorithm
// 		  keepAlive: false, //default is false
// 		  initialDelay: 0 // for keepAlive. default is 0
// 		}

// 		this.internalip 	= internalip;
// 		this.internalport	= internalport;
// 		this.externalip		= externalip;
// 		this.externalport	= externalip;
// 		sockjs 		= new WebTCP(internalip, internalport);
// 		socket 		= sockjs.createSocket(externalip, externalport, options);

// 		socket.on('connect', onconnection());
// 		socket.on('end', onclose(data));
// 		socket.on('close', onclose(data));
// 		socket.on('data',ondata());

// 		this.write = function(i){
// 			if (i != null && i != undefined){
// 				socket.write(i);
// 			}
// 			else{
// 				console.log('bad!')
// 			}
// 		}
function onconnection(){
			console.log('[connection established]');
			loginFn();
		}
function onmessage(message){
			previousMessage = message;
			console.log('Recieved: '+message.data);

}
function onclose(data){
			console.log('socket internally closed')
}

function convertBytes(string){
	var bytes = [];
	for (var i = 0; i < string.length; ++i){
		bytes.push('0x'+string.charCodeAt(i));
	}
	return bytes;
}
function convertBytes2(string){
	var bytes = [];
	for (var i = 0; i < string.length; ++i){
		bytes.push(string.charCodeAt(i));
	}
	return bytes;
}
function convertBuffer(str) {
	var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
	var bufView = new Uint16Array(buf);
	for (var i=0, strLen=str.length; i<strLen; i++) {
		bufView[i] = str.charCodeAt(i);
	}
	return buf;
}

function Authenticator(username, encodedPassword, UID){	// creates an object used for login and storage of data about the attempted login
	if (username == ""){
		alert('Username can not be empty');
		return false;
	}

	this.string 				= new Array(4); 	// create a storage array for external access.
	this.string['Username'] 	= username;
	this.string['Password'] 	= encodedPassword;
	this.string['UID']			= UID;
	this.json 					= '{ Username = '+username+', Password = '+encodedPassword+', UID = '+UID+' }';
	



	packetlength				= this.json.length*2;
	this.p =packetlength;	

	
	//packetlength			    = encodeURI(this.json).split(/%..|./).length - 1+'';  //figure out the packet length
	details = {};				//storage object
	details['in_0x']			= ['0x4'].concat(convertBytes(packetlength));//.concat(convertBytes(this.json));
	details['in_0xNum']			= [4].concat(convertBytes2(packetlength)).concat(convertBytes2(this.json));
	details['in_flat'] 			= '\u0004'+packetlength+this.json;
	
	buf = new ArrayBuffer(3+ packetlength);
	this.bufview = new Uint8Array(buf);
	this.bufview[0] = 0x4;
	this.bufview[1] = '0x'+packetlength.toString(16)[0]+'0';
	this.bufview[2] = '0x'+packetlength.toString(16)[1];
	this.bufview = this.bufview + convertBuffer(('0x'+packetlength)+this.json);
	details['buffer']			=buf;
	

	this.details = details;		//make the storage object viewable outside the class/object. Couldn't do this directly.
}

function loginFn(option){
	login = new Authenticator(username, encodedPassword, UID);
	server.socket.send(login.details['buffer']);
	console.log(login.details); //print an overview of the login object.
}

		var server = new __WSTCPBridge('ws://localhost:9999');
		var login;
		var previousMessage;





//ws://echo.websocket.org
//ws://localhost:9999


