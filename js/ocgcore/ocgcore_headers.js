//ocgapi.h
(function(){ //start encompasing anonymous function
"use strict";
//function card(){}; //struct
function card_info(){}; //stuct
function group(){}; //class
function effect(){}; //class
function interpreter(){} //class

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
	this.cards 			= new Array // of card(); 's
	this.groups 		= new Array // of group(); 's
	this.sgroups		= new Array // of group(); 's
	this.effects		= new Array // of effect(); 's
	this.uncopy			= new Array // of effect(); 's
	this.duel           = null; //function defined later that processes this class
	this._duel          = null; //function defined later that loops all te groups.
}

	//Player
	PLAYER_NONE = 2;
	PLAYER_ALL  = 3;
	//Phase
	PHASE_DRAW       = 0x01;
	PHASE_STANDBY    = 0x02;
	PHASE_MAIN1      = 0x04;
	PHASE_BATTLE     = 0x08;
	PHASE_DAMAGE     = 0x10;
	PHASE_DAMAGE_CAL = 0x20;
	PHASE_MAIN2      = 0x40;
	PHASE_END        = 0x80;
	//Options
	DUEL_TEST_MODE         = 0x01;
	DUEL_ATTACK_FIRST_TURN = 0x02;
	DUEL_NO_CHAIN_HINT     = 0x04;
	DUEL_ENABLE_PRIORITY   = 0x08;
	DUEL_PSEUDO_SHUFFLE    = 0x10;
	DUEL_TAG_MODE          = 0x20;
	DUEL_SIMPLE_AI         = 0x40;

//end of duel.h

//card.h 

function card_data() {  //struct
	this.code_     = new Number(); //this.code;
	this.alias     = new Number();
	this.setcode   = new Number();
	this.type_     = new Number(); //this.type;
	this.level     = new Number();
	this.attribute = new Number();
	this.race      = new Number();
	this.attack    = new Number();
	this.defense   = new Number();

}

function card_state() {
	this.code_         = new Number(); //this.code;
	this.type_         = new Number(); //this.type;
	this.level         = new Number();
	this.attribute     = new Number();
	this.race          = new Number();
	this.attack        = new Number();
	this.defense       = new Number();
	this.attack        = new Number();
	this.base_attack   = new Number();
	this.base_defense  = new Number();
	this.controler     = new Number();
	this.location_     = new Number();
	this.sequence      = new Number();
	this.position      = new Number();
	this.reason        = new Number();
	this.reason_card   = null;
	this.reason_player = new Number(); 
	this.reason_effect = null;
}

function query_cache() {
	this.code_          = new Number(); //this.code;
	this.alias          = new Number();
	this.setcode        = new Number();
	this.type_          = new Number(); //this.type;
	this.level          = new Number();
	this.attribute      = new Number();
	this.race           = new Number();
	this.attack         = new Number();
	this.defense        = new Number();
	this.base_attack    = new Number();
	this.base_defense   = new Number();
	this.reason         = new Number();
	this.is_public      = new Number();
	this.is_disabled    = new Number();
}

function card() {
	this.card_cectior     = new Array();
	this.effect_container ;
	this.card_set         = Array.map(this, card_sort)
	this.
}


});// end encompasing anonymous function