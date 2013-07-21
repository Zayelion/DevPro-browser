window.setInterval(function() {
  var elem = document.getElementById('chatbox');
  elem.scrollTop = elem.scrollHeight;
}, 500);


chatserver	= new __WSTCPBridge('ws://localhost:1337');
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
		process =message.data.substr(0, message.data.length-0)
		eval("json = "+process +" ;");
		eval("json.content = "+json.content +" ;");
		if (json.id == 3){
			chatserver.socket.send(JSON.stringify({id: 9, content: 'DevPro-English'}));
		}
		if (json.id == 13){
			$('#users')
			.append(
				'<li id="userlist-'+json.content.username+'"">'+json.content.username+'</li>')
		}
		if (json.id == 14){
			$('#userlist-'+json.content.username).remove();
		}
		if (json.id == 17){
			console.log(json)
			if(json.content.command == 1){name = '<em>'}else{name = '<strong>'+json.content.from.username+':</strong> '}
			$('#chatbox').append('<li>'+name+json.content.message+'</li>');
		}
		if (json.id != 17 || 13 || 14 ){console.log(json)};

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
	
	chatserver.socket.send(details);
	
	$('#login').fadeToggle('slow');
	$('#chat').fadeToggle('slow');
	
}
$(document).ready(function() {
messageon = function(e){
	command = 0;
	if ( $('#chat input').val() == ""){return false}
	messagesend = $('#chat input').val();
	$('#chat input').val("");
	if (messagesend.substr(0,3) == '/me '){command = 1}
	string = JSON.stringify({type: 1, command: 0, channel: "DevPro-English", message: messagesend});
	chatserver.socket.send(JSON.stringify({id: 8, content: string}));
	console.log(string);
	
	return false;
};
});