function PauseScreen(game) {
    this.game = game;
	this.pauseScreenSprites;
	this.pauseScreenBg;
	this.playBtn;
	this.resetBtn;
	this.quitBtn;
}
PauseScreen.prototype.loadSprite = function() {
	this.game.load.image('modalBgTexture', 'assets/screens/modal.png');
	this.game.load.image('playBtnTexture', 'assets/btns/play.png');
	this.game.load.image('quitBtnTexture', 'assets/btns/quit.png');
	this.game.load.image('resetBtnTexture', 'assets/btns/reset.png');	
}
PauseScreen.prototype.show = function() {	 
	this.pauseScreenSprites = game.add.group();
	this.pauseScreenSprites.enableBody = true;
	this.pauseScreenBg = this.pauseScreenSprites.create(210, 500, 'modalBgTexture');
	this.playBtn =  this.pauseScreenSprites.create(220, 520, 'playBtnTexture');
	this.playBtn.inputEnabled = true;
	this.playBtn.events.onInputDown.add(this.hide, this);
	this.resetBtn =  this.pauseScreenSprites.create(415, 520, 'resetBtnTexture');
	this.resetBtn.inputEnabled = true;
	this.resetBtn.events.onInputDown.add(this.reset, this);
	this.quitBtn =  this.pauseScreenSprites.create(610, 520, 'quitBtnTexture');
	this.quitBtn.inputEnabled = true;
	this.quitBtn.events.onInputDown.add(this.end, this);
	gameActive = false;
}
PauseScreen.prototype.hide = function() {
	this.pauseScreenSprites.destroy();
	gameActive = true;
	timer.resume();
},
PauseScreen.prototype.reset = function(){
	resetGame();
},
PauseScreen.prototype.end = function(){
	endScreen.show();
}