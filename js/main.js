//code execution
var CurrentVersion = '193100' // https://github.com/Buttys/DevProLauncher/blob/master/Program.cs line 19
var encodedPassword	= '1MY5XPo/v7dqOhWNi+faoQ==';
var username 		= 'testBrowser';
var UID				= '123456789123456789';
var serverlocation	= new __ServerLocator((function(){/*should system print connection code? */return true}));
var chatserver;
var login;
var previousMessage;

function __ServerLocator (print) {
	var serverlocation	= ''; 
	var serverdetails	= [];
	//$.get(serverlocation+CurrentVersion+'?callback=?', function(serverdatastring){
		/* 7/18/2013  overwrite for offline */ serverdatastring = 'OK|91.250.84.118|8933|8911|8922'
		serverdetails	= serverdatastring.split('|');
		this.Client		= 'node ws-tcp-bridge --method=ws2tcp --lport=9999 --rhost='+serverdetails[1]+':'+serverdetails[3];
		if (print = true){
			
			
		}			
	//});
	Address		: serverdetails[1]; 
	ChatPort	: serverdetails[2]; //Chatrooms -Login
	GamePort	: serverdetails[3]; //Server Game listings -Login
	DuelServer	: serverdetails[4]; //CLient to core connections
}

function __WSTCPBridge(externalhost){
	this.socket 			= new window.WebSocket(externalhost) || window.MozWebSocket;
	this.socket.onmessage	= function (e) {onmessage(e)};
	this.socket.onopen		= function (e) {onconnection(e)};
	function onconnection(){
		console.log('[connection established]');
		
	}
	function onmessage(message){
		console.log('Recieved: '+message.data);
	}
	function onclose(data){
		console.log('socket internally closed')
	}
}






function send_message(message,room,target){
	target.socket.send('MSG|'+room+'|'+message);

};
function login(){	// creates an object used for login and storage of data about the attempted login
	if ($('#username').val() == ""){
		alert('Username can not be empty');
		return false;
	}
	if ($('#password').val() == ""){
		alert('Password can not be empty');
		return false;
	}
	details		= JSON.stringify({id: 4, username:$('#username').val(), password:$('#password').val()}); // 4 = Login
	
	
	//location	= new __ServerLocator();
	chatserver	= new __WSTCPBridge('ws://localhost:1337');
	setTimeout(function() {chatserver.socket.send(details);}, 60);
	
}
