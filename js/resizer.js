function resizeByAspect(game,cw,ch)
{
	var ratioW = cw/game.width;
	var ratioH = ch/game.height;
	
	if (ratioW < ratioH)
		ratioH = ratioW
	else
		ratioW = ratioH;
	
	var tempWpercent = game.width/(cw*ratioW);
	var tempHpercent = game.height/(ch*ratioH);
	if (tempHpercent < tempWpercent)
		return tempHpercent;
	else
		return tempWpercent;
}