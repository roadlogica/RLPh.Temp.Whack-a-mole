function EndScreen(game) {
    this.game = game;
	this.endScreenSprites;
	this.endScreenBg;
}
EndScreen.prototype.loadSprite = function() {
	this.game.load.image('endBgTexture', 'assets/screens/end.png');
}
EndScreen.prototype.show = function() {	 
	this.endScreenSprites = game.add.group();
	this.endScreenSprites.enableBody = true;
	this.endScreenBg = this.endScreenSprites.create(1, 1, 'endBgTexture');
	this.endScreenBg.inputEnabled = true;
	this.endScreenBg.events.onInputDown.add(this.hide, this);
}
EndScreen.prototype.hide = function() {
	resetGame();
}