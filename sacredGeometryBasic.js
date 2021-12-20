

// general polygon equation
// x^2+y^2 = sec(mod(arctan(y,x), 2pi/n)-pi/n)
/*
function StrokeNSidedPolygon(x, y, n){
	var canvas = document.getElementById('draw');
	var dimension = canvas.getContext('2d');
	var pi = Math.PI;

	var polygon = Math.pow(1/Math.cos((Math.atan(y,x) % (2*pi)/n)-pi/n), 2);
	return polygon;
}
*/

var gameCanvas = {
	canvas: document.createEmlement("canvas");
	start: function() {
		this.frameNum = 0;
		this.canvas.height = window.innerHeight-20;
		this.canvas.width = window.innerWidth-40;
		this.dimension = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
	}
	clear : function (){this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);}
}

function soul(height, width){
	this.height = xBoundry;
	this.width = yBoundry;
	this.x = canvas.height/2;
	this.y = canvas.height/2;
	this.radius = x*x + y*y;
	this.sendR = function(){

	}
	this.speedX = 0;
	this.speedY = 0;

	dimen = gameCanvas.dimension;

	document.addEventListener('keydown', function(event){
		if(event.keyCode = 37){ // left
			this.x -= this.speedX;
		}
		else if (event.keyCode = 38){ // up
			this.y -= this.speedY;
		}
		else if(event.keyCode = 39){ // right
			this.x += this.speedX;
		} 
		else if (event.keyCode = 40) { // down
			this.y += this.speedY;
		}
	});
}


/*
The cell
--------
types of cell:
	
*/
function cell(rValue, xPos, yPos, type){
	this.rValue = rValue;
	this.type = type;
	this.xPos = xPos;
	this.yPos = yPos;
	this.radius = rValue*rValue;

	if(radius == getSoulPos()){

	}

	this.react = function(){
		dimension = gameCanvas.dimension;

		if(){

		}
	}

}

function plotLine(xStart, yStart, xEnd, yEnd){
	ctx.moveTo(xIntercept, yIntercept);
	ctx.lineTo(xEnd, yEnd);
	ctx.strokeStyle = "white";
	ctx.stroke();
}

function grid(){
	let centerX = window.innerWidth/2;
	let centerY = window.innerHeight/2;

	plotLine(0, centerY, window.innerwidth, centerY);
	plotLine(centerX, 0, centerX, window.innerHeight);
}

//treat like main
window.addEventListener("load", () => {
	
	dimension.strokeStyle = "rgba(255,255,255,1)";
	dimension.arc(canvas.width/2, canvas.height/2, 90, 0, 2*Math.PI, false);
	dimension.stroke();
});
