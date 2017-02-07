function SplashScreen(game) {
    this.game = game;
	this.splashScreenSprites;
	this.splashScreenBg;
	this.playBtn;
	this.instructionsBtn;
}
SplashScreen.prototype.loadSprite = function() {
	this.game.load.image('splashBgTexture', 'assets/screens/splash.png');
	this.game.load.image('playBtnTexture', 'assets/btns/play.png');
	this.game.load.image('instructionsBtnTexture', 'assets/btns/instructions.png');
}
SplashScreen.prototype.show = function() {	 
	this.splashScreenSprites = game.add.group();
	this.splashScreenSprites.enableBody = true;
	this.splashScreenBg = this.splashScreenSprites.create(1, 1, 'splashBgTexture');
	this.playBtn =  this.splashScreenSprites.create(100, 600, 'playBtnTexture');
	this.playBtn.inputEnabled = true;
	this.playBtn.events.onInputDown.add(this.hide, this);
	this.instructionsBtn =  this.splashScreenSprites.create(470, 600, 'instructionsBtnTexture');
	this.instructionsBtn.inputEnabled = true;
	this.instructionsBtn.events.onInputDown.add(this.showInstructions, this);	
}
SplashScreen.prototype.hide = function() {
	gameActive = true;
	this.splashScreenSprites.destroy();
}
SplashScreen.prototype.showInstructions = function(){
	instructionsScreen.show();
	this.splashScreenSprites.destroy();
}