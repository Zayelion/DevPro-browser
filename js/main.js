autoscroll1 = function(){var elem = document.getElementById(currentroom);elem.scrollTop = elem.scrollHeight;};

autoscroll = 0;
window.setInterval(function() {sortdevs();sortusers();}, 10000);
//window.setInterval(function() {chatserver.socket.send(JSON.stringify({id: 3, content : ''}))}, 60000); //ping
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

chatserver	= new __WSTCPBridge('ws://198.167.137.127:1337');
//code execution
var CurrentVersion  = '193100' // https://github.com/Buttys/DevProLauncher/blob/master/Program.cs line 19
var serverlocations = [];
var chatserver;
var login;
var previousMessage;
var linecount = 0
var servermessagecount = 0; // bugtracking array id
var bank = []; //server message storage 
var errorcatch; // error catch for debuging unprocessed json strings.
var currentroom;

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
			case -1: {
				$('#login').toggle();
				$('#chat').fadeToggle(1250);
				$('#chatbox').html('');
				$('#chatrooms').html('');
				login();
			}
			case 0: {
				//gamelist
			}break;
			//--------------
			case 1 :{
				//remove room
				$('#'+json.content).remove();

			}break;
			//--------------
			case 2: {
				//update rooms players
				//console.log(json);
				$('#'+json.content.Command).html(json.content.Data);
			}break;
			//--------------
			case 3: {
				console.log('Login accepted');
				chatserver.socket.send(JSON.stringify({id: 6, content: ''}));
				joinroom(activeroom);
			}break;
			//--------------
			case 4:{
				alert('Invalid Login, Try again.');
				location.reload();
			}break 
			//--------------
			case 10: {
				//ping
			}break;
			//--------------
			case 11: {
				$('#'+json.content).addClass('roomstarted');
				//roomstart
			}break;
			//--------------
			case 12: {
				for (var i = json.content.length - 1; i >= 0; i--) {
					if (json.content[i].rank >= 1 ){rank = "[<span class='dev-"+json.content[i].rank +"''>Dev</span>]";}else{rank = "";}
					$('#users')
						.append('<li id="userlist-'+json.content[i].username+'"">'+rank+json.content[i].username+'</li>');
				};
				sortdevs();
				sortusers();
				usercount();
			}break;
			//--------------
			case 13: {
				if (json.content.rank >= 1 ){rank = "[<span class='dev-"+json.content.rank +"''>Dev</span>]";}else{rank = "";}
				$('#users')
				.append('<li id="userlist-'+json.content.username+'"">'+rank+json.content.username+'</li>');
				
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
							.append('<li class="servermessage" id="linecount-'+servermessagecount+'">Server : '+json.content.message+'</li>');
				    }break;
				    default:{
				    	console.log('Unknown ID:17');
				    	console.log(json);
				    }
				}
			}break;
			case 29 : {
				// server list
				for (var i = json.content.length - 1; i >= 0; i--) {
					serverlocations.push(json.content[i]);
				};
			}break;
			//--------------
			case 37: {
				//create room
				//console.log(json);
				if (json.content.isRanked ){rankunrank = 'ranked'}else{rankunrank = 'unranked'}
					$('#'+rankunrank).append('<li id="'+json.content.server +'-'+ json.content.roomName+'">'+json.content.playerList.concat()+'</li>');

			}break;
			//--------------
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
	$.cookie('username', $('#username').val(),{ expires: 7 });
	$.cookie('password', $('#password').val(), { expires: 3 });
	details		= JSON.stringify({id: 4, username:$('#username').val(), password:$('#password').val()}); // 4 = Login
	//location	= new __ServerLocator();
	
	chatserver.socket.send(details);
	$('#wrapper').css({'width': '300%','overflow-x': 'auto'});
	$('.container').toggle();
	


	
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
		/*if (messagesend.substr(0,5) == '/kick'){
			//if(true){alert('not implemeted');return false;}
			command = 'KICK';
			messagesend= messagesend.substr(6);
			console.log(JSON.stringify({id: 18, content : {Command : command, data : messagesend}}));
			chatserver.socket.send(JSON.stringify({id: 18, content : {Command : command, Data : messagesend}}));
		}*/

		
		
		string = JSON.stringify({type: 1, command: command, channel: activeroom, message: messagesend});
		chatserver.socket.send(JSON.stringify({id: idn, content: string}));
		autoscroll = 60;
		

	};
$(document).ready(function() {
	$('#username').val($.cookie('username'));
	$('#password').val($.cookie('password'));
	$('#username').val()
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
