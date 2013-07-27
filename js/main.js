
var currentroom;


autoscroll1 = function(){var elem = document.getElementById(currentroom);elem.scrollTop = elem.scrollHeight;};

autoscroll = 0;
window.setInterval(function() {sortdevs();sortusers}, 10000);
window.setInterval(function() {
	
  if( autoscroll >= 0  ){
  	try{autoscroll1();
  	}catch(e){};
  }
 	autoscroll--;
}, 500);


$('input').click(function(){
	autoscroll = 15;

});

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
var linecount = 0
var servermessagecount = 0;
var bank = [];
var errorcatch; // error catch for debuging unprocessed json strings.

function sortdevs (){
	var mylist = $('#users');
	var listitems = mylist.children("li:contains('[')").get();
	listitems.sort(function(a, b) {
	var compA = $(a).text().toUpperCase();
	var compB = $(b).text().toUpperCase();

	return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });

}
function sortusers (){
	
	var mylist = $('#users');
	var listitems = mylist.children('li').not(":contains('[')").get();
	listitems.sort(function(a, b) {
	var compA = $(a).text().toUpperCase();
	var compB = $(b).text().toUpperCase();

	return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });

}
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
activeroom ='DevPro-English';
function __WSTCPBridge(externalhost){
	this.socket 			= new window.WebSocket(externalhost) || window.MozWebSocket;
	this.socket.onmessage	= function (e) {onmessage(e)};
	this.socket.onopen		= function (e) {onconnection(e)};
	function onconnection(){
		console.log('[connection established]');
		
	}
	function onmessage(message){
		process =message.data.substr(0, message.data.length-0)
		try {
			eval("json = "+process +" ;");
			eval("json.content = "+json.content +" ;");
		}catch(e){}
		switch (json.id){
			//--------------
			case 3: {
				console.log('Login accepted');
				chatserver.socket.send(JSON.stringify({id: 6, content: ''}));
				joinroom(activeroom);
			}break;
			//--------------
			case 12: {
				for (var i = json.content.length - 1; i >= 0; i--) {
					if (json.content[i].rank >= 1 ){rank = "[<span class='dev-"+json.content[i].rank +"''>Dev</span>]";}else{rank = "";}
					$('#users')
						.append('<li id="userlist-'+json.content[i].username+'"">'+rank+json.content[i].username+'</li>');
				};
				//sortdevs();
				sortusers();
				usercount();
			}break;
			//--------------
			case 13: {
				if (json.content.rank >= 1 ){rank = "[<span class='dev-"+json.content.rank +"''>Dev</span>]";}else{rank = "";}
				$('#users')
				.append('<li id="userlist-'+json.content.username+'"">'+rank+json.content.username+'</li>');
				//sortusers();
				usercount();
			}break;
			//--------------
			case 14:{
				$('#userlist-'+json.content.username).remove();
			}break;
			//--------------
			case 15:{
				console.log('Friends list recived:'+json);
			}break;
			//--------------
			case 16: {
				console.log('Joined '+json.content);
			}break;
			case 17: { 
				switch (json.content.type){
					case 1 :
						{if (json.content.from.rank >= 1 ){rank = "[<span class='dev-"+json.content.from.rank +"''>Dev</span>]";}else{rank = "";}
						if(json.content.command == 1){name = '<em>'+rank}else{name = '<strong>'+rank+json.content.from.username+':</strong> '}
						$('#room-'+json.content.channel)
							.append('<li id="linecount-'+servermessagecount+'">'+name+json.content.message+'</li>');
						$('#linecount-'+servermessagecount)
							.urlize();

					}break;
					case 2 : {
						$('#room-'+activeroom)
							.append('<li id="linecount-'+servermessagecount+'">Server :'+json.content.message+'</li>');
				    }break;
				    default:{
				    	console.log('Unknown ID:17 '+json);
				    }
				}
			}break;
			default:{
				console.log(json);
				alert('new data');
			}
		}			
		bank[servermessagecount] = json;
		servermessagecount = servermessagecount +1;
	}
		


	
	function onclose(data){
		console.log('socket internally closed')
	}
}

joinroom = function(roomtojoin){
	activeroom = roomtojoin;
	
	chatserver.socket.send(JSON.stringify({id: 9, content: roomtojoin}));
	$('#chatbox').append('<ul class="room active" id=room-'+roomtojoin+'></ul>');
	$('#chatrooms').append('<li class="active" id=control-'+roomtojoin+'>'+roomtojoin+'</li>');
	$('#chatbox ul, #chatrooms li').not('#'+roomtojoin).removeClass('active');
	currentroom = 'room-'+roomtojoin;
}






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
	
	$('#login').toggle();
	$('#chat').fadeToggle(1250);
	
}
out = "";
messageon = function(e){
		command = 0;
		idn = 8;
		if ( $('#chat input').val() == ""){return false}
		messagesend = $('#chat input').val();
		$('#chat input').val("");

		if( messagesend.substr(0,3) == '/me'){
			type = 1;
			command = 1;
			commandarray = messagesend.split(' ');
			cut = commandarray[0].length;
			messagesend= messagesend.substr(cut);
		}
		if (messagesend.substr(0,5) == '/kick'){
			//if(true){alert('not implemeted');return false;}
			command = 'KICK';
			messagesend= messagesend.substr(6);
			console.log(JSON.stringify({id: 18, content : {command : command, data : messagesend}}));
			chatserver.socket.send(JSON.stringify({id: 18, content : {command : command, data : messagesend}}));
		}

		
		
		string = JSON.stringify({type: 1, command: command, channel: activeroom, message: messagesend});
		chatserver.socket.send(JSON.stringify({id: idn, content: string}));
		autoscroll = 60;
		

	};
$(document).ready(function() {
	
	$('#chatform').click(function () {
		autoscroll1();
	});
	$('#chatform').submit(function() {
	 messageon();
	 autoscroll1();
	 return false;
	});
	
});// end ready document
function usercount(){
		c = $('#users li').length;
		$('.usercount').html('users online:'+c);
		return c;
	}