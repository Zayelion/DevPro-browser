//ocgapi.h
//(function(){ //start encompasing anonymous function
"use strict";
//function card(){}; //struct
function card_info(){}; //stuct
function group(){}; //class
function effect(){}; //class
function interpreter(){} //class

//end of ocgapi.h

//duel.h

function duel_arg(){
	start_lp		:new Number();
	start_hand		:new Number();
	draw_count		:new Number();
}

function duel(){

	//This first part here is an array buffer and will have to be rewritten if farther code allows;
	strbuffer      : new String(); 	//256
	buffer         : 0x1000;
	bufferlin      : null;
	bufferp        : null;
	lua            : null;
	game_field     : null;
	random         : new MersenneTwister();
	cards          : new Array // of card(); 's
	groups         : new Array // of group(); 's
	sgroups        : new Array // of group(); 's
	effects        : new Array // of effect(); 's
	uncopy         : new Array // of effect(); 's
	duel           : null; //function defined later that processes this class
	_duel          : null; //function defined later that loops all te groups.

	//duel();
	//~duel();
}

	//Player
	var PLAYER_NONE = 2;
	var PLAYER_ALL  = 3;
	//Phase
	var PHASE_DRAW       = 0x01;
	var PHASE_STANDBY    = 0x02;
	var PHASE_MAIN1      = 0x04;
	var PHASE_BATTLE     = 0x08;
	var PHASE_DAMAGE     = 0x10;
	var PHASE_DAMAGE_CAL = 0x20;
	var PHASE_MAIN2      = 0x40;
	var PHASE_END        = 0x80;
	//Options
	var DUEL_TEST_MODE         = 0x01;
	var DUEL_ATTACK_FIRST_TURN = 0x02;
	var DUEL_NO_CHAIN_HINT     = 0x04;
	var DUEL_ENABLE_PRIORITY   = 0x08;
	var DUEL_PSEUDO_SHUFFLE    = 0x10;
	var DUEL_TAG_MODE          = 0x20;
	var DUEL_SIMPLE_AI         = 0x40;

//end of duel.h

//card.h 

function card_data() {  //struct
	code_     : new Number(); //code;
	alias     : new Number();
	setcode   : new Number();
	type_     : new Number(); //type;
	level     : new Number();
	attribute : new Number();
	race      : new Number();
	attack    : new Number();
	defense   : new Number();

}

function card_state(card, effect) {
	code_         : new Number(); //code;
	type_         : new Number(); //type;
	level         : new Number();
	attribute     : new Number();
	race          : new Number();
	attack        : new Number();
	defense       : new Number();
	attack        : new Number();
	base_attack   : new Number();
	base_defense  : new Number();
	controler     : new Number();
	location_     : new Number();
	sequence      : new Number();
	position      : new Number();
	reason        : new Number();
	reason_card   : card;
	reason_player : new Number(); 
	reason_effect : effect;
}

function query_cache() {
	code           : new Number(); //code;
	alias          : new Number();
	setcode        : new Number();
	type           : new Number(); //type;
	level          : new Number();
	attribute      : new Number();
	race           : new Number();
	attack         : new Number();
	defense        : new Number();
	base_attack    : new Number();
	base_defense   : new Number();
	reason         : new Number();
	is_public      : new Number();
	is_disabled    : new Number();
}

function card(card, effect, duel) {
	card_vector         : new Array(card);
	effect_container ; /// revisit
	card_set             : effect.map(card_sort);
	card_indexer         : effect.map(effect_container);
	effect_relation      : effect.map( new Number);
	relation_map         : card.map( new Number);
	counter_map          : new Array.map( new Number);
	attacker_map         : new Array.map( card);

	scrtype              : new Number();
	pduel                : duel;
	data_                : new card_data(card, effect);
	previous_            : new card_data(card, effect);
	temp                 : new card_data(card, effect);
	current_             : new card_data(card, effect);
	q_cache              : new query_cache();
	owner                : new Number();
	summon_player        : new Number();
	summon_type          : new Number();
	status_              : new Number();
	operation_param      : new Number();
	announce_count       : new Number();
	attacked_count       : new Number();
	attack_negated_count : new Number();
	attack_all_target    : new Number();
	cardid               : new Number();
	fieldid              : new Number();
	fieldid_r            : new Number();
	turnid               : new Number();
	turn_counter         : new Number();
	unique_pos           : new Number(2);
	unique_code          : new Number();
	unique_effect        : effect;
	equiping_target      : card;
	pre_equip_target     : card;
	overlay_taget        : card;
	relations            : new relation_map();
	counters             : new counter_map();
	announced_cards      : new attacker_map();
	attacked_cards       : new attacker_map();
	battled_cards        : new attacker_map();
	equiping_cards       : new card_set();
	material_cards       : new card_set();
	effect_target_owner  : new card_set();
	effect_target_cards  : new card_set();
	xyz_materials        : new card_vector();
	single_effect        : new effect_container;
	field_effect         : new effect_container;
	equip_effect         : new effect_container;
	indexer              : new effect_indexer;
	relate_effect        : new effect_relation;
	immune_effect        : new effect_set_v;
    
    card();
    //~card();

    var card_operation_sort = function( card.c1, card.c2){};

    get_infos         = function(buf, query_flag, use_cache){use_cache = typeof use_cache !== 'undefined' ? use_cache : true;}
	get_info_location = function(){};
	get_code          = function(){};
	is_set_card       = function(set_code){};
	get_type          = function(){};
	get_base_attack   = function(swap){swap = typeof swap !== 'undefined' ? swap : false;};
	get_attack        = function(swap){swap = typeof swap !== 'undefined' ? swap : false;};
	get_base_defense  = function(swap){swap = typeof swap !== 'undefined' ? swap : false;};
	get_defense       = function(swap){swap = typeof swap !== 'undefined' ? swap : false;};
	get_level         = function(){};
	get_rank          = function(){};
	get_synchro_level = function(card.pcard){};
	get_ritual_level  = function(card.pcard){};
	is_xyz_level      = function(card.pcard, lv ){};
	get_attribute     = function(){};
	get_race          = function(){};
	is_position       = function(pos){};
	set_status        = function(status, enabled){};
	get_status        = function(status){};
	is_status         = function(status){};
    
    equip                  = function(card.target, send_msg){send_msg = typeof send_msg !== 'undefined' ? send_msg : true;};
    unequip                = function(){};
    get_union_count        = function(){};
    xyz_overlay            = function(card_set.materials){};
    xyz_add                = function(card.mat, card_set.des){};
    xyz_remove             = function(card.mat){};
    appy_field_effect      = function(){};
    cancel_field_effect    = function(){};
    enable_field_effect    = function(enabled){};
    add_effect             = function(effect.peffect){};
    //remove_effect        = function(effect.peffect){};
    remove_effect          = function(effect.peffect, effect_container.iterator(it)){};
    copy_effect            = function(code, reset, count){};
    reset                  = function(id, reset_type){};
    reset_effect_count     = function(){};
    refresh_disable_status = function(){};
    refresh_control_status = function(){};


}


//});// end encompasing anonymous function
function card_sort(){};