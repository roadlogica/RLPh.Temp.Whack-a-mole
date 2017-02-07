var game = new Phaser.Game(1000, 1000, Phaser.AUTO, 'RLPH', null, false, false);

var BasicGame = function (game) { };

BasicGame.Boot = function (game) { };

var cherub = new Angel(game); 
var cursors;
var background = new Background(game);
var splashScreen = new SplashScreen(game);
var pauseScreen = new PauseScreen(game);
var instructionsScreen = new InstructionScreen(game);
var gameActive = false;

BasicGame.Boot.prototype = {
    preload: function () {
		game.load.json('fontSettings', 'settings/fontSettings.json');
		game.load.json('gameText', 'settings/gameText.json');		
		game.load.image('pauseBtnTexture', 'assets/btns/pause.png');
		
		background.loadSprite();		
		cherub.loadSprite();
		splashScreen.loadSprite();
		pauseScreen.loadSprite();
		instructionsScreen.loadSprite();
		
    },	
    create: function () {
		background.create();
		cherub.create();
		cursors = game.input.keyboard.createCursorKeys();
		this.createPauseButton();		
		splashScreen.show();
    },
	update: function(){
		if(gameActive == true){
			cherub.update();
		}
	},
	render: function(){

	},
	createPauseButton: function(){
		var pauseBtn =  game.add.sprite(910, 20, 'pauseBtnTexture');
		pauseBtn.scale.setTo(0.35, 0.35);
		pauseBtn.inputEnabled = true;
		pauseBtn.events.onInputDown.add(this.pauseGame, this);	
	},
	pauseGame: function(){
		gameActive = false;
		pauseScreen.show();
	}
};

function resetGame(){
	game.state.start('Boot');
}

function endGame(){
	game.state.start('Boot');
}

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');