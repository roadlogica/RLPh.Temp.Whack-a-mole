var leaderBoard; //sprite group

function Leaderboard(game) {
    this.game = game;
}

Leaderboard.prototype.loadSprite = function() {
	//load all sprites for leaderboard
	//bg, buttons etc
	this.game.load.image('splash', 'assets/splash.png');
	leaderBoard = this.game.add.group();
}
Leaderboard.prototype.show = function() {	 
	//create all sprites and add to screen sprite group
	var leaderBoardBg = game.add.sprite(0, 0, 'splash');
	leaderBoardBg.inputEnabled = true;
	leaderBoardBg.events.onInputDown.add(this.hide, this);
	leaderBoard.add(leaderBoardBg);
}
Leaderboard.prototype.hide = function() {
	//destroy sprite group to destroy all sprites within the screen
	leaderBoard.destroy();
}