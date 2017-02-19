function resizeByAspect(tw,th,sprite)
{
	//var ratioW = game.width/cw;
	//var ratioH = game.height/ch;
	//alert(sprite.width + " " + sprite.height);
	var tempWpercent = tw/sprite.width;//(cw*ratioW);
	var tempHpercent = th/sprite.height;//(ch*ratioH);
	
	if (tempHpercent < tempWpercent)
		return tempHpercent;
	else
		return tempWpercent;
}