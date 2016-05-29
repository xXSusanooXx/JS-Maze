function passLabirinth(ar,yStart,xStart,yFinish,xFinish){
	
	var crossRoads = [];
	class CrossRoad{
		constructor(y,x,nearingWays){
			this.x=x;
			this.y=y;
			this.nearingWays=nearingWays;
		}
	}
	ar[yFinish][xFinish]=3;
	if(!makeMoveFromACrossRoad(new CrossRoad(yStart,xStart,getNearingWays(yStart,xStart))))
	{
		alert('There are no finish we can pass for');
	}

	function getNearingWays(y,x){
		var nearingWays=[];
		if(ar[y][x+1]!==undefined && ar[y][x+1]!==0 && ar[y][x+1]!==4)
		{
			nearingWays[nearingWays.length]={
				x:x+1,
				y:y
			}
		}
		if(ar[y][x-1]!==undefined && ar[y][x-1]!==0 && ar[y][x-1]!==4)
		{
			nearingWays[nearingWays.length]={
				x:x-1,
				y:y
			}
		}
		if(ar[y+1]!==undefined && ar[y+1][x]!==undefined && ar[y+1][x]!==0 && ar[y+1][x]!==4)
		{
			nearingWays[nearingWays.length]={
				x:x,
				y:y+1
			}
		}
		if(ar[y-1]!==undefined && ar[y-1][x]!==undefined && ar[y-1][x]!==0 && ar[y-1][x]!==4)
		{
			nearingWays[nearingWays.length]={
				x:x,
				y:y-1
			}
		}
		return nearingWays;
	}
	function isFinish(y,x){
		if(ar[y][x]===3)
		{
			return true;
		}
	}
	function makeMoveFromACrossRoad(crossRoad){

		if(isFinish(crossRoad.y,crossRoad.x))
		{
			alert('Finish['+crossRoad.y+','+crossRoad.x+']');
			return true;
		}
		ar[crossRoad.y][crossRoad.x]=4;

		var currentX;
		var currentY;

		while(crossRoad.nearingWays.length>=1)
		{
			currentY=crossRoad.nearingWays[0].y;
			currentX=crossRoad.nearingWays[0].x;

			if(isFinish(currentY,currentX))
			{
				alert('Finish['+currentY+','+currentX+']');
				return true;
			}

			ar[currentY][currentX]=4;
			//alert(currentY+','+currentX);
			localNearingWays=getNearingWays(currentY,currentX);
			while(localNearingWays.length===1)
			{	
				currentY=localNearingWays[0].y;
				currentX=localNearingWays[0].x;
			
				if(isFinish(currentY,currentX))
				{
					alert('Finish['+currentY+','+currentX+']');
				return true;
				}

				ar[currentY][currentX]=4;
				//alert(currentY+','+currentX);
				var localNearingWays=getNearingWays(currentY,currentX);
			}
			if(localNearingWays.length>1)
			{
				if(makeMoveFromACrossRoad(new CrossRoad(currentY,currentX,localNearingWays)))
				{
					return true;
				}
			}
			crossRoad.nearingWays.splice(0,1);
		}

	}
}