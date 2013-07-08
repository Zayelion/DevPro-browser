//ocgapi.cpp



//end ocgapi.cpp

//duel.cpp

duel.prototype.duel = function() {
	lua                  = new interpreter(this);
	game_field           = new field(this);
	game_field.temp_card = new_card(0);
	bufferlen            = 0;
	bufferp              = buffer;
}
duel.prototype._duel = function(){
	
}


duel.prototype.clear = function(){
	gamefield = null;
	cards.clear();
	groups.clear();
	effects.clear();
}

duel.prototype.new_card = function(code){
	pcard = new card();
	cards.insert(pcard);;
	if(code != null) {read_card(code, pcard._data);}
	pcard.pduel = this;
	lua.register_card(pcard)
	return pcard;
}

duel.prototype.new_group = function(pcard){

	pgroup = new group();
	proups.insert(pgroups);
	if (pcard != null){ pgroup.container.insert(pcard);}

}

duel.prototype.delete_card(pcard){
	cards.erase(pcard);
	pcard = null;
}

duel.prototype.delete_effect(peffect){
	lua.unregister_effect(peffect);
	effects.erase(peffect);
	peffect = null;
}
