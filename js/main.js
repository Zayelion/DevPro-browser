// EU server IP 91.250.84.118
// encodedPassword 1MY5XPo/v7dqOhWNi+faoQ==

var encodedPassword	= '1MY5XPo/v7dqOhWNi+faoQ==';
var username 		= 'testBrowser'
var UID				='123456789123456789'
function __serverConstruct(internalip, internalport, externalip, externalport){

		this.internalip 	= internalip;
		this.internalport	= internalport;
		this.externalip		= externalip;
		this.externalport	= externalip;
		this.jsocket 		= new WebTCP(internalip, internalport);
		this.socket 		= this.jsocket.createSocket(externalip, externalport);

		this.socket.on('connect', function(){
			console.log('[connection established, data has been sent]');
		});
		this.socket.on('end', function(data){
			console.log('Socket is closed')
		});
		this.socket.on('data', function(data){
			console.log('Response :'+data)
		});


}
function Authenticator(username, encodedPassword, UID){
		if (username == ""){
			alert('Username can not be empty');
			return false;
		}
		this.string 				= new Array(4);
		this.string['Username'] 	= username;
		this.string['Password'] 	= encodedPassword;
		this.string['UID']			= UID;
		this.json 					= '{ Username = '+username+', Password = '+encodedPassword+', UID = '+UID+' }'
		this.packetlenght			= encodeURI(this.json).split(/%..|./).length - 1; //x2 would work but just in case something happens.


		
		this.details			 	='4'+ this.packetlenght + this.json;
		return this.finished;
}


//Buttys 86.0.24.143 9999
	var server = new __serverConstruct('localhost', 9999, '86.0.24.143', 9999);

login = new Authenticator(username, encodedPassword, UID);
server.socket.write(login.details);
