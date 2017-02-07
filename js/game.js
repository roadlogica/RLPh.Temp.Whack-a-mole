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
		game.load.json('fontSettings', 'settings/fontSettings.json');
		game.load.json('gameText', 'settings/gameText.json');		
		
		background.loadSprite();		
		cherub.loadSprite();
		splashScreen.loadSprite();
		instructionsScreen.loadSprite();
		
    },	
    create: function () {
		background.create();
		cherub.create();
		cursors = game.input.keyboard.createCursorKeys();
		splashScreen.show();
    },
	update: function(){
		if(gameActive == true){
			cherub.update();
		}
	},
	render: function(){

	}
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');