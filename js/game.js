var game = new Phaser.Game(1000, 1000, Phaser.AUTO, 'RLPH', null, false, false);

var BasicGame = function (game) { };

BasicGame.Boot = function (game) { };

var gameSettings;
var cherub = new Angel(game); 
var cursors;
var background = new Background(game);
var splashScreen = new SplashScreen(game);
var pauseScreen = new PauseScreen(game);
var instructionsScreen = new InstructionScreen(game);
var endScreen = new EndScreen(game);
var gameActive = false;
var timer, timerEvent;
var timeText;

BasicGame.Boot.prototype = {
    preload: function () {
		game.load.json('fontSettings', 'settings/fontSettings.json');
		game.load.json('gameSettings', 'settings/gameSettings.json');
		game.load.json('gameText', 'settings/gameText.json');		
		game.load.image('pauseBtnTexture', 'assets/btns/pause.png');
		gameSettings = game.cache.getJSON('gameSettings');	
		
		background.loadSprite();		
		cherub.loadSprite();
		splashScreen.loadSprite();
		pauseScreen.loadSprite();
		endScreen.loadSprite();
		instructionsScreen.loadSprite();
		
    },	
    create: function () {
		gameSettings = game.cache.getJSON('gameSettings');
		background.create();
		cherub.create();
		cursors = game.input.keyboard.createCursorKeys();
		this.createPauseButton();
		this.createTimer();		
		splashScreen.show();
		if(gameSettings.timerOff == false){
			timer.pause();
		}
    },
	update: function(){
		if(gameActive == true){
			cherub.update();
		}
	},
	render: function(){
		gameSettings = game.cache.getJSON('gameSettings');
		if(gameSettings.timerOff == false){		
			this.timerTick();
		}
	},
	createPauseButton: function(){
		var pauseBtn =  game.add.sprite(910, 20, 'pauseBtnTexture');
		pauseBtn.scale.setTo(0.35, 0.35);
		pauseBtn.inputEnabled = true;
		pauseBtn.events.onInputDown.add(this.pauseGame, this);	
	},
	pauseGame: function(){
		gameSettings = game.cache.getJSON('gameSettings');
		if(gameSettings.timerOff == false){
			timer.pause();
		}
		gameActive = false;
		pauseScreen.show();
	},
	createTimer: function(){
		gameSettings = game.cache.getJSON('gameSettings');
		timer = game.time.create();
		if(gameSettings.timerOff == false){
			timerEvent = timer.add(Phaser.Timer.SECOND * parseFloat(gameSettings.gamelength), this.endTimer, this);
			timer.start();
			var fontSettings = game.cache.getJSON('fontSettings');			
			timeText = game.add.text(10, 20, this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)) , fontSettings.timer );				
		}
	},
	timerTick: function(){
        if (timer.running) {
            timeText.text = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
        }
        else {
            endScreen.show();
        }
	},
	formatTime: function(s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);   
    },
	endTimer: function() {
        timer.stop();
    }
};

function resetGame(){
	game.state.start('Boot');
}


game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');