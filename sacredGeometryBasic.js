

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

const winSize = {
	height: document.getElementById("backgroundLayer").height,
	width: document.getElementById("backgroundLayer").width
};

function buttons(){
	var menuButton = document.getElementById("menuButton");
	var bottonHolder = document.getElementById("buttonHolder");
	if(bottonHolder.style.display == "none"){
		menuButton.style.top = "5%";
		bottonHolder.style.display = "inline-block";
	} else {
		menuButton.style.top = "44.5%";
		bottonHolder.style.display = "none";
	}
}
const plains = {
	//Background : 
	canvasLayerI: document.getElementById("backgroundLayer"),
	// Presentation Layer : thing you can change, move, 
	canvasLayerII: document.getElementById("presentationLayer"),
	// User Interface the layer we interact with to affect the presentation layer
	canvasLayerIII: document.getElementById("userInterfaceLayer"),
	//layering adds depth, by using layering you can create essentially 3 layered movies
	ctxLayerI: function(){
		return this.canvasLayerI.getContext('2d');
	},
	ctxLayerII: function(){
		return this.canvasLayerII.getContext('2d');
	},
	ctxLayerIII: function(){
		return this.canvasLayerIII.getContext('2d');
	},
	clearLayerI: function(){
		let x = this.ctxLayerI();
		x.clearRect(0,0,this.canvasLayerI.width,this.canvasLayerI.height);
	},
	clearLayerII: function(){
		let x = this.ctxLayerII();
		x.clearRect(0,0,this.canvasLayerII.width,this.canvasLayerII.height);
	},
	clearLayerIII: function(){
		console.log("reched");
		let x = this.ctxLayerIII();
		x.clearRect(0,0,this.canvasLayerIII.width,this.canvasLayerIII.height);
	}
}

function archemedesSpiral(){
	var spiralRadius;
	var angle;

	var size = document.getElementById("sizeSlider");
	var spiralRadius = document.getElementById("widthSlider");
	var angle = document.getElementById("angleSlider");
	//adjust slider values

	var ctx = plains.ctxLayerIII();
	ctx.moveTo(document.getElementById("backgroundLayer").width/2, document.getElementById("backgroundLayer").height/2);
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath()
	console.log(size.value);
	console.log(spiralRadius.value);
	console.log(angle.value);
	let oldX = document.getElementById("backgroundLayer").width/2;
	let oldY = document.getElementById("backgroundLayer").height/2
	for (let i = 0; i < size.value; i++) {
	  newAngle = (0.1 * angle.value)*i;
	  x=(oldX) + (spiralRadius.value*newAngle)*Math.cos(newAngle);
	  y=(oldY) + (spiralRadius.value*newAngle)*Math.sin(newAngle);
	  ctx.lineTo(x, y);
	  oldX = x;
	  oldY = y;
	}
	ctx.stroke();
}

function slider(){
	document.getElementById("sizeSlider").onchange = function () {
		plains.clearLayerIII();
		archemedesSpiral();
	};
	document.getElementById("widthSlider").onchange = function () {
		plains.clearLayerIII();
		archemedesSpiral();
	};
	document.getElementById("angleSlider").onchange = function () {
		plains.clearLayerIII();
		archemedesSpiral();
	};
}

//treat like main
window.addEventListener("load", () => {
	archemedesSpiral();
});
