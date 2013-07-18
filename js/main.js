//Buttys node ws-tcp-bridge --method=ws2tcp --lport=9999 --rhost=86.0.24.143:9999
// encodedPassword 1MY5XPo/v7dqOhWNi+faoQ==


var encodedPassword	= '1MY5XPo/v7dqOhWNi+faoQ==';
var username 		= 'testBrowser';
var UID				='123456789123456789';


function __ServerLocator (print) {
	var serverlocation	= 'http://ygopro.de/launcher/server.php?v=';
	var serverversion	= '193100'; // https://github.com/Buttys/DevProLauncher/blob/master/Program.cs line 19
	var serverdetails	= [];
	$.get(serverLocation+serverversion, function(serverdatastring){
		serverdetails	= serverdatastring.split('|');
	});
	this.Address	= serverdetails[1];
	this.ChatPort	= serverdetails[2];
	this.GamePort	= serverdetails[3];
	this.Client		= 'node ws-tcp-bridge -method=ws2tcp --lport=9999 -rhost='+serverdetails[1]+':'+serverdetails[3];
	if (print = true){console.log(this.Client);}
}

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

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
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


	
	//packetlength			    = encodeURI(this.json).split(/%..|./).length - 1+'';  //figure out the packet length with Regex
	details = {};				//storage object
	details['buffer']			= 0x04;
	details['packetlength']		= packetlength;
	details['json']				= json;
	

	
	
	

	this.details = details;		//make the storage object viewable outside the class/object. Couldn't do this directly.
}

function loginFn(option){
	login = new Authenticator(username, encodedPassword, UID);
	server.socket.send(login.details['buffer']+login.details['packetlength']+login.details['json']);
	console.log(login.details); //print an overview of the login object.
}
		var serverlocation	= new __ServerLocator((function(){/*should system print connection code? */return true});
		var server			= new __WSTCPBridge('ws://localhost:9999');
		var login;
		var previousMessage;









