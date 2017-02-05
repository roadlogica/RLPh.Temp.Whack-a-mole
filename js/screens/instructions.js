function InstructionScreen(game) {
    this.game = game;
	this.instructionScreenSprites;
	this.instructionScreenBg;
	this.playBtn;
}
InstructionScreen.prototype.loadSprite = function() {
	this.game.load.image('instructionBgTexture', 'assets/screens/instructions.png');
    this.game.load.image('playBtnTexture2', 'assets/btns/play.png');
}
InstructionScreen.prototype.show = function() {	 
	console.log("show");
	this.instructionScreenSprites = game.add.group();
	this.instructionScreenSprites.enableBody = true;
	this.instructionScreenBg = this.instructionScreenSprites.create(1, 1, 'instructionBgTexture');
	this.playBtn =  this.instructionScreenSprites.create(370, 600, 'playBtnTexture2');
	this.playBtn.inputEnabled = true;
	this.playBtn.events.onInputDown.add(this.hide, this);
}
InstructionScreen.prototype.hide = function() {
	this.instructionScreenSprites.destroy();
	gameActive = true;
}