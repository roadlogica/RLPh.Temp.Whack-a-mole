function Angel(game) {
    this.game = game;
	this.moveSpeed = 4;
	this.foot = 1;
}
Angel.prototype.loadSprite = function() {
	this.game.load.spritesheet('angel', 'assets/angel.png', 80, 64, 16);
}
Angel.prototype.create = function() {
	 
    this.sprite = this.game.add.sprite(470, 500, 'angel');
	this.sprite.scale.setTo(1.5, 1.5);
	this.sprite.frame = 0;
}
Angel.prototype.update = function() {
	//position
    if (cursors.up.isDown)
    {
        this.sprite.y -= this.moveSpeed;
		if(this.foot == 1){
			this.sprite.frame = 13;
			this.foot = 2;
		}else if(this.foot == 2){
			this.sprite.frame = 14;
			this.foot = 3;		
		}else if(this.foot == 3){
			this.sprite.frame = 15;
			this.foot = 4;
		}else if(this.foot == 4){
			this.sprite.frame = 12;
			this.foot = 1;
		}
    }
    else if (cursors.down.isDown)
    {
        this.sprite.y += this.moveSpeed;
		if(this.foot == 1){
			this.sprite.frame = 1;
			this.foot = 2;
		}else if(this.foot == 2){
			this.sprite.frame = 2;
			this.foot = 3;		
		}else if(this.foot == 3){
			this.sprite.frame = 3;
			this.foot = 4;
		}else if(this.foot == 4){
			this.sprite.frame = 4;
			this.foot = 1;
		}
    }

    if (cursors.left.isDown)
    {
		this.sprite.x -= this.moveSpeed;
		if(this.foot == 1){
			this.sprite.frame = 5;
			this.foot = 2;
		}else if(this.foot == 2){
			this.sprite.frame = 6;
			this.foot = 3;		
		}else if(this.foot == 3){
			this.sprite.frame = 7;
			this.foot = 4;
		}else if(this.foot == 4){
			this.sprite.frame = 4;
			this.foot = 1;
		}
    }
    else if (cursors.right.isDown)
    {
		this.sprite.x += this.moveSpeed;
		if(this.foot == 1){
			this.sprite.frame = 11;
			this.foot = 2;
		}else if(this.foot == 2){
			this.sprite.frame = 8;
			this.foot = 3;		
		}else if(this.foot == 3){
			this.sprite.frame = 9;
			this.foot = 4;
		}else if(this.foot == 4){
			this.sprite.frame = 10;
			this.foot = 1;
		}		
    }
	
}