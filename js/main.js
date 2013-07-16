//Buttys node ws-tcp-bridge --method=ws2tcp --lport=9999 --rhost=86.0.24.143:9999
//EU node ws-tcp-bridge --method=ws2tcp --lport=9999 --rhost=91.250.84.1181:9999
// encodedPassword 1MY5XPo/v7dqOhWNi+faoQ==


var encodedPassword	= '1MY5XPo/v7dqOhWNi+faoQ==';
var username 		= 'testBrowser';
var UID				='123456789123456789';

function __WSTCPBridge(externalhost){
		this.socket 			= new WebSocket(externalhost);
		this.socket.onmessage	= function (e) {onmessage(e)};
		this.socket.onopen		= function (e) {onconnection(e)};
}

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
	if (encodedPassword == ""){
		alert('Password can not be empty');
		return false;
	}
	if (UID == ""){
		alert('Not authorized to use this website.');
		return false;
	}

	json 						= '{ Username = '+username+', Password = '+encodedPassword+', UID = '+UID+' }';
	packetlength				= json.length*2;
	buffer = new ArrayBuffer(1);
	buffer_view = new Uint8Array();
	buffer_view[0] = 0x4;

	
	//packetlength			    = encodeURI(this.json).split(/%..|./).length - 1+'';  //figure out the packet length with Regex
	details = {};				//storage object
	details['buffer']			= buffer;
	details['packetlength']		= packetlength;
	details['json']				= json;	
	
	

	this.details = details;		//make the storage object viewable outside the class/object. Couldn't do this directly.
}

function loginFn(option){
	login = new Authenticator(username, encodedPassword, UID);
	server.socket.send(login.details['buffer']);
	server.socket.send(login.details['packetlength']);
	server.socket.send(login.details['json']);
	console.log(login.details); //print an overview of the login object.
}

		var server = new __WSTCPBridge('ws://localhost:9999');
		var login;
		var previousMessage;





//ws://echo.websocket.org
//ws://localhost:9999


