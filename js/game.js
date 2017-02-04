var game = new Phaser.Game(1000, 1000, Phaser.AUTO, 'RLPH', null, false, false);

var BasicGame = function (game) { };

BasicGame.Boot = function (game) { };

var cherub = new Angel(game); 
var cursors;
var background = new Background(game);
var splash = new SplashScreen(game);

BasicGame.Boot.prototype = {
    preload: function () {
		background.loadSprite();		
		cherub.loadSprite();
		splash.loadSprite();
    },	
    create: function () {
		background.create();
		cherub.create();
		cursors = game.input.keyboard.createCursorKeys();
		splash.show();
    },

	update: function(){
		cherub.update();
	},
	render: function(){

	}
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');