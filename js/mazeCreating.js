/**
 * Created by Юра on 16.05.2016.
 */
var mazeMatrix = [];
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var nOfCells = 27;
for(var i=0;i<nOfCells;i++){
    mazeMatrix[i]=[nOfCells];
    for(var j=0;j<nOfCells;j++){
        mazeMatrix[i][j]=0;
    }
}
class CrossRoad{
    constructor(y,x){
        this.x=x;
        this.y=y;
    }
    returnSideByNumber(n){
        switch (n){
            case 0:
                return 'right';break;
            case 1:
                return 'bottom';break;
            case 2:
                return 'left';break;
            case 3:
                return 'top';break;
        }
    }
}


/*
* twoStep(diraction)
*
*
*
*
*
*
*
* */
function createMaze(ar,yStart,xStart){
    var localNearingWays=[];
    var crossRoads = [];
    function getNearingWays(y,x){
        var c = new CrossRoad(y,x);
        if( ar[y][x+1]!==undefined &&  ar[y][x+1]!==1)
        {
            c.right={
                x:x+1,
                y:y
            }
        }
        if(ar[y][x-1]!==undefined &&  ar[y][x-1]!==1)
        {
            c.left={
                x:x-1,
                y:y
            }
        }
        if(ar[y+1]!==undefined && ar[y+1][x]!==undefined &&  ar[y+1][x]!==1)
        {
            c.bottom={
                x:x,
                y:y+1
            }
        }
        if(ar[y-1]!==undefined && ar[y-1][x]!==undefined &&  ar[y-1][x]!==1)
        {
            c.top={
                x:x,
                y:y-1
            }
        }
        return c;
    }
    ar[yStart][xStart]=3;
    makeMoveFromACrossRoad(getNearingWays(yStart,xStart));


    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function howManySides(crossRoad) {
        var c=0;
        if(crossRoad.left!==undefined){
            c++;
        }
        if(crossRoad.right!==undefined){
            c++;
        }
        if(crossRoad.top!==undefined){
            c++;
        }
        if(crossRoad.bottom!==undefined){
            c++;
        }
        return c;
    }
    function makeMoveFromACrossRoad(crossRoad){
        ar[crossRoad.y][crossRoad.x]=1;
        //alert(crossRoad.y+','+crossRoad.x);
        var side;
        var currentX;
        var currentY;
        //throw 3;
        var topChance=2
        var r2=0;
        while(howManySides(crossRoad)!==0)
        {
            if(r2===0) {
                var r = getRandomInt(0, 3);
                var point;
                while ((point = crossRoad[side = crossRoad.returnSideByNumber(r)]) === undefined) {
                    r = getRandomInt(0, 3);
                }
                currentX = point.x;
                currentY = point.y;
                //alert(currentY+','+currentX);
                ar[currentY][currentX] = 1;
                var c = getNearingWays(currentY, currentX);
                if ((point = c[c.returnSideByNumber(r)]) === undefined) {
                    r2 = getRandomInt(0, topChance);
                    delete crossRoad[side];
                    continue;
                }
                //r = getRandomInt(0, localNearingWays.length - 1);
                currentX = point.x;
                currentY = point.y;
                c = getNearingWays(currentY, currentX);
                //alert(currentY+','+currentX);
                ar[currentY][currentX] = 1;
                if (howManySides(c) > 1) {
                    makeMoveFromACrossRoad(c);
                }
                r2 = getRandomInt(0, topChance);
                delete crossRoad[side];
                continue;
            }
            else{
                var r = getRandomInt(0, 3);
                var point;
                while ((point = crossRoad[side = crossRoad.returnSideByNumber(r)]) === undefined) {
                    r = getRandomInt(0, 3);
                }
                delete crossRoad[side];
                r2 = getRandomInt(0, topChance);
                continue;
            }
            }

        }


}
var xStart =getRandomInt(0,nOfCells-1),
    yStart = getRandomInt(0,nOfCells-1);
var xFinish = getRandomInt(0,nOfCells-1),
    yFinish=getRandomInt(0,nOfCells-1);
createMaze(mazeMatrix,xStart,yStart);