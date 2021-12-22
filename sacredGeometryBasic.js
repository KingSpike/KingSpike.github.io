

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
		this.ctxLayerI.clearRect(0,0,this.canvasLayerI.width,this.canvasLayerI.height);
	},
	clearLayerII: function(){
		this.ctxLayerII.clearRect(0,0,this.canvasLayerII.width,this.canvasLayerII.height);
	},
	clearLayerIII: function(){
		this.ctxLayerIII.clearRect(0,0,this.canvasLayerIII.width,this.canvasLayerIII.height);
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
	ctx.clearRect(0,0,document.getElementById("backgroundLayer").width, document.getElementById("backgroundLayer").height);

	ctx.moveTo(document.getElementById("backgroundLayer").width/2, document.getElementById("backgroundLayer").height/2);
	ctx.strokeStyle = "black";
	console.log(size.value);
	for (let i = 0; i < size.value; i++) {
	  newAngle = (0.1 * angle.value)*i;
	  x=(winSize.width/2) + (spiralRadius.value*newAngle)*Math.cos(newAngle);
	  y=(winSize.width/2) + (spiralRadius.value*newAngle)*Math.sin(newAngle);
	  ctx.lineTo(x, y);
	}
	ctx.stroke();
}

function slider(){
	document.getElementById("sizeSlider").onchange = function () {
		archemedesSpiral();
	};
	document.getElementById("widthSlider").onchange = function () {
		archemedesSpiral();
	};
	document.getElementById("angleSlider").onchange = function () {
		archemedesSpiral();
	};
}

//treat like main
window.addEventListener("load", () => {
	archemedesSpiral();
});
