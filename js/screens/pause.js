function PauseScreen(game) {
    this.game = game;
	this.pauseScreenSprites;
	this.pauseScreenBg;
	this.playBtn;
}
PauseScreen.prototype.loadSprite = function() {
	this.game.load.image('modalBgTexture', 'assets/screens/modal.png');
	this.game.load.image('playBtnTexture', 'assets/btns/play.png');
}
PauseScreen.prototype.show = function() {	 
	this.pauseScreenSprites = game.add.group();
	this.pauseScreenSprites.enableBody = true;
	this.pauseScreenBg = this.pauseScreenSprites.create(1, 1, 'modalBgTexture');
	this.playBtn =  this.pauseScreenSprites.create(100, 600, 'playBtnTexture');
	this.playBtn.inputEnabled = true;
	this.playBtn.events.onInputDown.add(this.hide, this);
	gameActive = false;
}
PauseScreen.prototype.hide = function() {
	this.pauseScreenSprites.destroy();
	gameActive = true;
}