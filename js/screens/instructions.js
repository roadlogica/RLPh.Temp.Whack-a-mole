var instructions; //sprite group

function Instructions(game) {
    this.game = game;
}

Instructions.prototype.loadSprite = function() {
	//load all sprites for leaderboard
	//bg, buttons etc
	this.game.load.image('splash', 'assets/splash.png');
	instructions = this.game.add.group();
}
Instructions.prototype.show = function() {	 
	//create all sprites and add to screen sprite group
	var instructionsBg = game.add.sprite(0, 0, 'splash');
	instructionsBg.inputEnabled = true;
	instructionsBg.events.onInputDown.add(this.hide, this);
	instructions.add(instructionsBg);
}
Instructions.prototype.hide = function() {
	//destroy sprite group to destroy all sprites within the screen
	instructions.destroy();
}