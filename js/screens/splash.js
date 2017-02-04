function SplashScreen(game) {
    this.game = game;
	this.sprite;
}
SplashScreen.prototype.loadSprite = function() {
	this.sprite = this.game.load.image('splash', 'assets/splash.png');
}
SplashScreen.prototype.show = function() {	 
	this.sprite = game.add.sprite(0, 0, 'splash');
	this.sprite.inputEnabled = true;
	this.sprite.events.onInputDown.add(this.hide, this);
}
SplashScreen.prototype.hide = function() {
	this.sprite.destroy();
}