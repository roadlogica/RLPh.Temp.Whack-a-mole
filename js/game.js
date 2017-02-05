var game = new Phaser.Game(1000, 1000, Phaser.AUTO, 'RLPH', null, false, false);

var BasicGame = function (game) { };

BasicGame.Boot = function (game) { };

var cherub = new Angel(game); 
var cursors;
var background = new Background(game);
var splashScreen = new SplashScreen(game);
var instructionsScreen = new InstructionScreen(game);
var gameActive = false;

BasicGame.Boot.prototype = {
    preload: function () {
		background.loadSprite();		
		cherub.loadSprite();
		splashScreen.loadSprite();
		instructionsScreen.loadSprite();
    },	
    create: function () {
		// background.create();
		// cherub.create();
		cursors = game.input.keyboard.createCursorKeys();
		splashScreen.show();
    },
	update: function(){
		cherub.update();
		console.log(gameActive);
	},
	render: function(){

	},
	showInstructions: function(){
		// instructionScreen.show();
	}
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');