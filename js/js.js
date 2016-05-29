(function toScope(){
function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	mazeMatrix[yFinish][xFinish]=3;
	mazeMatrix[yStart][xStart]=5;

//5 - старт
//0 - стена
//1 - коридор
//3 - финиш
//4 - пройденная клетка

class Page{
	constructor(){
		this.widthOfCell=22;
		this.nOfCells=nOfCells;
	}
	createField(ar){
		var field=document.getElementById('field');
		field.style.width=this.nOfCells*this.widthOfCell;
		field.style.height=this.nOfCells*this.widthOfCell;
		
		for(var i=0;i<this.nOfCells;i++)
		{
			for(var j=0;j<this.nOfCells;j++)
			{
				var cell = document.createElement('input');
				cell.style.width=this.widthOfCell;
				cell.style.height=this.widthOfCell; 
				cell.type = 'submit';
				/*cell.setAttribute('x',j);
				cell.setAttribute('y',i);*/
				cell.className='cell';
				cell.value='';
				if(mazeMatrix[i][j]===0)
				{
					cell.classList.add('wall');
				}
				if(mazeMatrix[i][j]===1)
				{
					cell.classList.add('passage');
					cell.content='S'
				}
				if(mazeMatrix[i][j]===3)
				{
					cell.classList.add('finish');
					cell.value='F'
				}
				if(mazeMatrix[i][j]===5)
				{
					cell.classList.add('start');
					cell.value='S'
				}
				field.appendChild(cell);
			}
				
		}
	}
}

var page1 = new Page();
page1.createField(mazeMatrix);
var button = document.querySelector('#findFinish');
button.onclick=function () {
	passLabirinth(mazeMatrix,yStart,xStart,yFinish,xFinish);
};
})();