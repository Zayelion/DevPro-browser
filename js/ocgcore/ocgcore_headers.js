//ocgapi.h

var OCGAPI_H_;
//common.h

var MATCH_ALL  = function(x,y) { return ((x)&(y))==(y) };
var MATCH_ANY  = function(x,y) { return (x)&(y) };
var ADD_BIT    = function(x,y) { return (x)|=(y) };
var REMOVE_BIT = function(x,y) { return ((x)&=~(y)) };

var OPERATION_SUCCESS  = 1;
var OPERATION_FAIL     = 0;
var OPERATION_CANCELED = -1;

function card_sort(c1, c2){};

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

//Locations
var LOCATION_DECK		    = 0x01;
var LOCATION_HAND		    = 0x02;
var LOCATION_MZONE		    = 0x04;
var LOCATION_SZONE		    = 0x08;
var LOCATION_GRAVE		    = 0x10;
var LOCATION_REMOVED	    = 0x20;
var LOCATION_EXTRA		    = 0x40;
var LOCATION_OVERLAY	    = 0x80;
var LOCATION_ONFIELD	    = 0x0c;
//Positions
var POS_FACEUP_ATTACK		= 0x1;
var POS_FACEDOWN_ATTACK		= 0x2;
var POS_FACEUP_DEFENCE		= 0x4;
var POS_FACEDOWN_DEFENCE	= 0x8;
var POS_FACEUP				= 0x5;
var POS_FACEDOWN			= 0xa;
var POS_ATTACK				= 0x3;
var POS_DEFENCE				= 0xc;
var NO_FLIP_EFFECT			= 0x10000;
//Types
var TYPE_MONSTER		    = 0x1;
var TYPE_SPELL			    = 0x2;
var TYPE_TRAP			    = 0x4;
var TYPE_NORMAL			    = 0x10;
var TYPE_EFFECT			    = 0x20;
var TYPE_FUSION			    = 0x40;
var TYPE_RITUAL			    = 0x80;
var TYPE_TRAPMONSTER	    = 0x100;
var TYPE_SPIRIT			    = 0x200;
var TYPE_UNION			    = 0x400;
var TYPE_DUAL			    = 0x800;
var TYPE_TUNER			    = 0x1000;
var TYPE_SYNCHRO		    = 0x2000;
var TYPE_TOKEN			    = 0x4000;
var TYPE_QUICKPLAY		    = 0x10000;
var TYPE_CONTINUOUS		    = 0x20000;
var TYPE_EQUIP			    = 0x40000;
var TYPE_FIELD			    = 0x80000;
var TYPE_COUNTER		    = 0x100000;
var TYPE_FLIP			    = 0x200000;
var TYPE_TOON			    = 0x400000;
var TYPE_XYZ			    = 0x800000;
//Attributes
var ATTRIBUTE_EARTH		 = 0x01;
var ATTRIBUTE_WATER		 = 0x02;
var ATTRIBUTE_FIRE		 = 0x04;
var ATTRIBUTE_WIND		 = 0x08;
var ATTRIBUTE_LIGHT		 = 0x10;
var ATTRIBUTE_DARK		 = 0x20;
var ATTRIBUTE_DEVINE	 = 0x40;
//Races
var RACE_WARRIOR		 = 0x1;
var RACE_SPELLCASTER	 = 0x2;
var RACE_FAIRY			 = 0x4;
var RACE_FIEND			 = 0x8;
var RACE_ZOMBIE			 = 0x10;
var RACE_MACHINE		 = 0x20;
var RACE_AQUA			 = 0x40;
var RACE_PYRO			 = 0x80;
var RACE_ROCK			 = 0x100;
var RACE_WINDBEAST		 = 0x200;
var RACE_PLANT			 = 0x400;
var RACE_INSECT			 = 0x800;
var RACE_THUNDER		 = 0x1000;
var RACE_DRAGON			 = 0x2000;
var RACE_BEAST			 = 0x4000;
var RACE_BEASTWARRIOR	 = 0x8000;
var RACE_DINOSAUR		 = 0x10000;
var RACE_FISH			 = 0x20000;
var RACE_SEASERPENT		 = 0x40000;
var RACE_REPTILE		 = 0x80000;
var RACE_PSYCHO			 = 0x100000;
var RACE_DEVINE			 = 0x200000;
var RACE_CREATORGOD		 = 0x400000;
//Reason
var REASON_DESTROY		 = 0x1;
var REASON_RELEASE		 = 0x2;
var REASON_TEMPORARY	 = 0x4;
var REASON_MATERIAL		 = 0x8;
var REASON_SUMMON		 = 0x10;
var REASON_BATTLE		 = 0x20;
var REASON_EFFECT		 = 0x40;
var REASON_COST			 = 0x80;
var REASON_ADJUST		 = 0x100;
var REASON_LOST_TARGET	 = 0x200;
var REASON_RULE			 = 0x400;
var REASON_SPSUMMON		 = 0x800;
var REASON_DISSUMMON	 = 0x1000;
var REASON_FLIP			 = 0x2000;
var REASON_DISCARD		 = 0x4000;
var REASON_RDAMAGE		 = 0x8000;
var REASON_RRECOVER		 = 0x10000;
var REASON_RETURN		 = 0x20000;
var REASON_FUSION		 = 0x40000;
var REASON_SYNCHRO		 = 0x80000;
var REASON_RITUAL		 = 0x100000;
var REASON_XYZ			 = 0x200000;
var REASON_REPLACE		 = 0x1000000;
var REASON_DRAW			 = 0x2000000;
var REASON_REDIRECT		 = 0x4000000;
//Summon Type
var SUMMON_TYPE_NORMAL	 = 0x10000000;
var SUMMON_TYPE_ADVANCE	 = 0x11000000;
var SUMMON_TYPE_DUAL	 = 0x12000000;
var SUMMON_TYPE_FLIP	 = 0x20000000;
var SUMMON_TYPE_SPECIAL	 = 0x40000000;
var SUMMON_TYPE_FUSION	 = 0x43000000;
var SUMMON_TYPE_RITUAL	 = 0x45000000;
var SUMMON_TYPE_SYNCHRO	 = 0x46000000;
var SUMMON_TYPE_XYZ		 = 0x49000000;
//Status
var STATUS_DISABLED				 = 0x0001;
var STATUS_TO_ENABLE			 = 0x0002;
var STATUS_TO_DISABLE			 = 0x0004;
var STATUS_PROC_COMPLETE		 = 0x0008;
var STATUS_SET_TURN				 = 0x0010;
var STATUS_FLIP_SUMMONED		 = 0x0020;
var STATUS_REVIVE_LIMIT			 = 0x0040;
var STATUS_ATTACKED				 = 0x0080;
var STATUS_FORM_CHANGED			 = 0x0100;
var STATUS_SUMMONING			 = 0x0200;
var STATUS_EFFECT_ENABLED		 = 0x0400;
var STATUS_SUMMON_TURN			 = 0x0800;
var STATUS_DESTROY_CONFIRMED	 = 0x1000;
var STATUS_LEAVE_CONFIRMED		 = 0x2000;
var STATUS_BATTLE_DESTROYED		 = 0x4000;
var STATUS_COPYING_EFFECT		 = 0x8000;
var STATUS_CHAINING				 = 0x10000;
var STATUS_SUMMON_DISABLED		 = 0x20000;
var STATUS_ACTIVATE_DISABLED	 = 0x40000;
var STATUS_UNSUMMONABLE_CARD	 = 0x80000;
var STATUS_UNION				 = 0x100000;
var STATUS_ATTACK_CANCELED		 = 0x200000;
var STATUS_INITIALIZING			 = 0x400000;
var STATUS_ACTIVATED			 = 0x800000;
var STATUS_JUST_POS				 = 0x1000000;
var STATUS_CONTINUOUS_POS		 = 0x2000000;
var STATUS_IS_PUBLIC			 = 0x4000000;
var STATUS_ACT_FROM_HAND		 = 0x8000000;
//Counter
var COUNTER_NEED_PERMIT		= 0x1000;
var COUNTER_NEED_ENABLE		= 0x2000;
//Query list
var QUERY_CODE			 = 0x1;
var QUERY_POSITION		 = 0x2;
var QUERY_ALIAS			 = 0x4;
var QUERY_TYPE			 = 0x8;
var QUERY_LEVEL			 = 0x10;
var QUERY_RANK			 = 0x20;
var QUERY_ATTRIBUTE		 = 0x40;
var QUERY_RACE			 = 0x80;
var QUERY_ATTACK		 = 0x100;
var QUERY_DEFENCE		 = 0x200;
var QUERY_BASE_ATTACK	 = 0x400;
var QUERY_BASE_DEFENCE	 = 0x800;
var QUERY_REASON		 = 0x1000;
var QUERY_REASON_CARD	 = 0x2000;
var QUERY_EQUIP_CARD	 = 0x4000;
var QUERY_TARGET_CARD	 = 0x8000;
var QUERY_OVERLAY_CARD	 = 0x10000;
var QUERY_COUNTERS		 = 0x20000;
var QUERY_OWNER			 = 0x40000;
var QUERY_IS_DISABLED	 = 0x80000;
var QUERY_IS_PUBLIC		 = 0x100000;

//end common.h





function DECL_DLLXPORT() {

	this.ygoAdapter = {
		ReadScript    : function(scriptname, len){},
		ReadCard      : function(code, card_data){var card_data = card_data.data},
		HandleMessage : function(msg, message_type){}

	};

	this.duelAdapter = {
		duel : {pduel : null},

		duelAdapter      : function(seed){},
		_duelAdapter     : function(){},
		startduel        : function(options){},
		set_player_info  : function(playerid, lp, startcount, drawcount){},
		get_log_message  : function(buf){},
		get_message      : function(buf){},
		process          : function(){},
		new_card         : function(code, owner, playerid, location, sequence, position){},
		new_tag_card     : function(code, owner, location){},
		query_field_info : function(buf){},
		set_responsei    : function(value){},
		set_responseb    : function(buf){},
		preload_script   : function(script, len){},
		set_adapter      : function(ygoAdapter){ var ygoAdapter = this.prototype.ygoAdapter},

	};
}

//end ocgapi.h

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
	start_lp		: new Number();
	start_hand		: new Number();
	draw_count		: new Number();
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

    card_operation_sort = function( c1, c2 ){};

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
	get_synchro_level = function(pcard){};
	get_ritual_level  = function(pcard){};
	is_xyz_level      = function(pcard, lv ){};
	get_attribute     = function(){};
	get_race          = function(){};
	is_position       = function(pos){};
	set_status        = function(status, enabled){};
	get_status        = function(status){};
	is_status         = function(status){};
 
	equip                  = function(target, send_msg){send_msg = typeof send_msg !== 'undefined' ? send_msg : true;};
	unequip                = function(){};
	get_union_count        = function(){};
	xyz_overlay            = function(materials){};
	xyz_add                = function(mat, des){};
	xyz_remove             = function(mat){};
	appy_field_effect      = function(){};
	cancel_field_effect    = function(){};
	enable_field_effect    = function(enabled){};
	add_effect             = function(peffect){};
	remove_effect          = function(peffect){};
	remove_effect          = function(peffect, it){};
	copy_effect            = function(code, reset, count){};
	reset                  = function(id, reset_type){};
	reset_effect_count     = function(){};
	refresh_disable_status = function(){};
	refresh_control_status = function(){};

	count_turn           = function(ct){};
	create_relation      = function(target, reset){};
	create_relation      = function(peffect){};
	is_has_relation      = function(target){};
	is_has_relation      = function(peffect){};
	release_relation     = function(target){};
	release_relation     = function(peffect){};
	leave_field_redirect = function(reason){};
	destination_redirect = function(reason){};
	add_counter          = function(destination, reason){};
	remove_counter       = function(countertype, count){};
	is_can_add_counter   = function(countertype, count){};
	get_counter          = function(countertype){};
	set_material         = function(materials){};
	add_card_target      = function(pcard){};
	cancel_card_target   = function(pcard){};

	filter_effect                   = function(code, est, sort){ sort = typeof sort !== 'undefined' ? sort : true;};
	filter_single_continuous_effect = function(code, est, sort){ sort = typeof sort !== 'undefined' ? sort : true;};
	filter_immune_effect            = function(){};
	filter_disable_related_cards    = function(){};
	filter_csummon_procedure        = function(playerid, eset, ignore_count){};
	filter_set_procedure            = function(playerid, eset, ignore_count){};
	filter_spsummon_procedure       = function(playerid, eset){};
	effect.is_affected_by_effect           = function(code){};
	effect.is_affected_by_effect           = function(code, card){card = card['target']};
	effect.check_equip_control_effect      = function(){};
	fusion_check                    = function(fusion_m, cg, chkf){};
	fusion_select                   = function(playerid, fusion_m, cg, chkf){};

	is_equipable                = function(pcard){};
	//is_summonable               = function(){};
	is_summonable               = function(peffect){};
	is_can_be_summoned          = function(peffect){};
	get_tribute_summon_count    = function(){};
	get_can_be_flip_summoned    = function(){};
	is_can_be_flip_summoned     = function(playerid){};
	is_special_summoned         = function(playerid){};
	is_can_be_special_summoned  = function(resaon_effect, sumtype, sumpos, sumplayer, toplayer, nocheck, nolimit){};
	is_setable_mzone            = function(playerid, ignore_count, peffect){};
	is_setable_mzone            = function(playerid, ignore_fd){ignore_fd = typeof ignore_fd !== 'undefined' ? ignore_fd : +0;};
	is_affect_by_effect         = function(peffect){};
	is_destructable             = function(){};
	is_destructable_by_battle   = function(pcard){};
	is_destructable_by_effect   = function(peffect, playerid){};
	is_removeable               = function(playerid){};
	is_removable_as_cost        = function(playerid){};
	is_releasable_by_summon     = function(playerid, pcard){};
	is_releasable_by_nonsummon  = function(playerid){};
	is_releasable_by_effect     = function(playerid, peffect){};
	is_capable_sent_grave       = function(playerid){};
	is_capable_sent_hand        = function(playerid){};
	is_capable_sent_deck        = function(playerid){};
	is_capable_sent_extra       = function(playerid){};
	is_capable_cost_grave       = function(playerid){};
	is_capable_cost_hand        = function(playerid){};
	is_capable_cost_deck        = function(playerid){};
	is_capable_cost_extra       = function(playerid){};
	is_capable_attack           = function(){};
	is_capable_attack_announce  = function(playerid){};
	is_capable_change_position  = function(playerid){};
	is_capable_turn_set         = function(playerid){};
	is_capable_change_set       = function(){};
	is_capable_change_control   = function(){};
	is_control_can_be_changed   = function(){};
	is_capable_be_battle_target = function(pcard){};
	is_capable_be_effect_target = function(peffect, playerid){};
	is_can_be_fusion_material   = function(){};
	is_can_be_synchro_material  = function(scard, tuner){tuner = typeof tuner !== 'undefined' ? tuner : +0;};
	is_can_be_xyz_material      = function(scard){};
}
//end of card.h

//group.h

//end of group




//});// end encompasing anonymous function
