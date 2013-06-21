//ocgapi.cpp



//end ocgapi.cpp

//duel.cpp

duel.prototype = function() {
	lua                  = new interpreter(this);
	game_field           = new field(this);
	game_field.temp_card = new_card(0);
	bufferlen            = 0;
	bufferp              = buffer;
}
_duel.prototype = function(){
	
}


clear.prototype = function(){
	


	gamefield = null;
	cards.clear();
	groups.clear();
	effects.clear()

}