//ocgapi.h
(function(){ //start encompasing anonymous function

function card(){}; 			//struct
function card_info(){}; 	//stuct
function group(){};			//class
function effect(){};		//class
function interpreter(){}	//class

//end of ocgapi.h

//duel.h
	// load randomizer function #include mtrandom.h
	$.getScript('js/vendor/mersenne-twister.js');
	//write loaderscript later

duel_arg = function(){
	this.start_lp		=new Number();
	this.start_hand		=new Number();
	this.draw_count		=new Number();
}

duel = function() {

	//This first part here is an array buffer and will have to be rewritten if farther code allows;
	this.strbuffer		= new String(); 	//256
	this.buffer			= null;		//0x1000
	this.bufferlin		= null;
	this.bufferp		= null;
	this.lua			= null;
	this.game_field		= null;
	this.random 		= new MersenneTwister();
	this.cards 			= new card();
	this.groups 		= new group();
	this.sgroups		= new group();
	this.effects		= new effect();
	this.uncopy			= new effect();
}

	//Player
	PLAYER_NONE 		= 2;
	PLAYER_ALL			= 3;
	//Phase
	PHASE_DRAW				= 0x01;
	PHASE_STANDBY			= 0x02;
	PHASE_MAIN1				= 0x04;
	PHASE_BATTLE			= 0x08;
	PHASE_DAMAGE			= 0x10;
	PHASE_DAMAGE_CAL		= 0x20;
	PHASE_MAIN2				= 0x40;
	PHASE_END				= 0x80;
	//Options
	DUEL_TEST_MODE			= 0x01;
	DUEL_ATTACK_FIRST_TURN	= 0x02;
	DUEL_NO_CHAIN_HINT		= 0x04;
	DUEL_ENABLE_PRIORITY	= 0x08;
	DUEL_PSEUDO_SHUFFLE		= 0x10;
	DUEL_TAG_MODE			= 0x20;
	DUEL_SIMPLE_AI			= 0x40;

//end of duel.h

//card.h 

function card_data() {  //struct
	this.code_;  //this.code;
	this.alias;
	this.setcode;
	this.type_;	//this.type;
	this.level;
	this.attribute;
	this.race;
	this.attack;
	this.defense;

}

function card_state() {
	this.code_; //this.code;
	this.type_; //this.type;
	this.level;
	this.attribute;
	this.race;
	this.attack;
	this.defense;
	this.attack;
	this.base_attack;
	this.base_defense;
	this.controler;
	this.locationl
	this.sequence;
	this.position;
	this.reason;
	this.reason_card = new card();
	this.reason_player; 
	this.reason_effect = new effect();

}



});// end encompasing anonymous function