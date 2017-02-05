var welcome; //sprite group

function Welcome(game) {
    this.game = game;
}

Welcome.prototype.loadSprite = function() {
	//load all sprites for leaderboard
	//bg, buttons etc
	this.game.load.image('splash', 'assets/splash.png');
	welcome = this.game.add.group();
}
Welcome.prototype.show = function() {	 
	//create all sprites and add to screen sprite group
	var welcomeBg = game.add.sprite(0, 0, 'splash');
	welcomeBg.inputEnabled = true;
	welcomeBg.events.onInputDown.add(this.hide, this);
	welcome.add(welcomeBg);
}
Welcome.prototype.hide = function() {
	//destroy sprite group to destroy all sprites within the screen
	welcome.destroy();
}