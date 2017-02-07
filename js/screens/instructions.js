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
	this.instructionScreenSprites = game.add.group();
	this.instructionScreenSprites.enableBody = true;	
	this.instructionScreenBg = this.instructionScreenSprites.create(1, 1, 'instructionBgTexture');
	this.playBtn =  this.instructionScreenSprites.create(420, 600, 'playBtnTexture2');
	this.playBtn.inputEnabled = true;
	this.playBtn.events.onInputDown.add(this.hide, this);
	this.fontSettings = game.cache.getJSON('fontSettings');
	this.gameText = game.cache.getJSON('gameText');
	this.instructionTitle = game.add.text(290, 100, 'Instructions', this.fontSettings.instructionTitle );
	this.instructionText = game.add.text(150, 300, this.gameText.instructions , this.fontSettings.instructions );
	this.instructionScreenSprites.add(this.instructionText);
	this.instructionScreenSprites.add(this.instructionTitle);
}
InstructionScreen.prototype.hide = function() {
	this.instructionScreenSprites.destroy();
	gameActive = true;
}