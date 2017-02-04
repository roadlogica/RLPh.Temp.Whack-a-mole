function Background(game) {
    this.game = game;
	this.sprite;
}
Background.prototype.loadSprite = function() {
	this.sprite = this.game.load.image('background', 'assets/grassy.png');
}
Background.prototype.create = function() {	 
	this.sprite = game.add.sprite(0, 0, 'background');
}
