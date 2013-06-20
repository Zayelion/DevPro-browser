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

function duel_arg{
	var this.start_lp;
	var this.start_hand;
	var this.draw_count;
}

duel = function {

	//This first part here is an array buffer and will have to be rewritten if farther code allows;
	var this.strbuffer; 	//256
	var this.buffer;		//0x1000
	var this.bufferlin;
	var this.bufferp;
	var this.lua;
	var this.game_field;
	var this.random 	= new MersenneTwister();
	var this.cards 		= new card();
	var this.groups 	= new group;
	var this.sgroups	= new group;
	var this.effects	= new effect;
	var this.uncopy		= new effect;
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

function card_data() {
	var this.code_;  //this.code;
	var this.alias;
	var this.setcode;
	var this.type_;	//this.type;
	var this.level;
	var this.attribute;
	var this.race;
	var this.attack;
	var this.defense;
}

function card_state() {
	var this.code_; //this.code;
	var this.type_; //this.type;
}



});// end encompasing anonymous function