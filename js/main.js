//Buttys 86.0.24.143 9999
// EU server IP 91.250.84.118
// encodedPassword 1MY5XPo/v7dqOhWNi+faoQ==
//node ws-tcp-bridge --method=ws2tcp --lport=9999 --rhost=91.250.84.1181:9999

var encodedPassword	= '1MY5XPo/v7dqOhWNi+faoQ==';
var username 		= 'testBrowser';
var UID				='123456789123456789';

function __WSTCPBridge(externalip, externalhost, local){
		
		
		this.externalip			= externalip;
		this.externalport		= externalip;
		this.socket 			= new WebSocket('ws://localhost:9999');

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
			console.log('[connection established');
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
	



	packetlength			    = encodeURI(this.json).split(/%..|./).length - 1+'';  //figure out the packet length
	details = {};				//storage object
	details['in_0x']			= ['0x4'].concat(convertBytes(packetlength)).concat(convertBytes(this.json));
	details['in_0xNum']			= [4].concat(convertBytes2(packetlength)).concat(convertBytes2(this.json));
	details['in_flat'] 			= '\u0004'+packetlength+this.json;
	

	this.details = details;		//make the storage object viewable outside the class/object. Couldn't do this directly.
}

function loginFn(option){
	login = new Authenticator(username, encodedPassword, UID);
	server.socket.send(login.details['in_0x'+'\n']);
	server.socket.send(login.details['in_0xNum'+'\n']);
	server.socket.send(login.details['in_flat'+'\n']);
	console.log(login.details); //print an overview of the login object.
}

		var server = new __WSTCPBridge('ws://localhost', 9999, false);
		var login;
		var previousMessage;





//server.socket.send(login.details.in_flat);



