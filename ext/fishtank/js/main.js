var canvas;
var context;
var critter = [];
var prop = [];

var CanvasWidth = 0;
var CanvasHeight = 0;

var FPS = 60;

var backgroundMusic = new Audio("sounds/background.mp3");
var critterSound;

window.onload = init;

function init()
{
	background = new Background();
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	CanvasWidth = canvas.width;
	CanvasHeight = canvas.height;
	CanvasOffsetX = canvas.offsetLeft;
	CanvasOffsetY = canvas.offsetTop;
	canvas.setAttribute('tabindex','1');
	canvas.focus();
	U.addEvent(canvas, "keydown", doKeyPress);
	
	context.clearRect(0, 0, CanvasWidth, CanvasHeight);
	
	var gradient=context.createLinearGradient(0,0,0,CanvasHeight);
		gradient.addColorStop(0.0, "#452496");
		gradient.addColorStop(0.8, "#3F43E7");
		gradient.addColorStop(0.81, "#c5b199");
		gradient.addColorStop(1.0, "#8b755a");
		context.fillStyle=gradient;
		context.fillRect(0, 0, CanvasWidth, CanvasHeight);
		
	setInterval(loop, 1000/FPS );
		
	for (var i = 0; i < 3; i ++)
		  {
		     critter[i] = new Critter();
		  }

	for (var i = 3; i < 8; i ++)
  		{
		     critter[i] = new Critter();
		     critter[i].image.src = "images/fish.png";
		     critter[i].soundFile = "sounds/test.mp3";
		}
		
	for (var i = 8; i < 11; i ++)
  		{
		     critter[i] = new Critter();
		     critter[i].image.src = "images/sub.png";
		     critter[i].sizeX = 100;
		     critter[i].sizeY = 100;
		     critter[i].soundFile = "sounds/sub.mp3";
		}
		
	for (var i = 0; i < 3; i++)	
	{
		prop[i] = new Prop();
	}
		
		
		
		U.addEvent(canvas, "click", doCritterClick);
		canvas.setAttribute('tabindex','1');
		canvas.focus();
		U.addEvent(canvas, "keydown", doKeyPress);
		backgroundMusic.play();
		backgroundMusic.volume = 0.5;
		backgroundMusic.loop = true;
				
}

function play ()
	{
		backgroundMusic.play();
		
	}
	
function pause ()
	{
		backgroundMusic.pause();
	} 

 function volumeup ()
 	{
 		backgroundMusic.volume +=0.1;
 	}

 function volumedown ()
 	{
 		backgroundMusic.volume -=0.1;
 	}
 	
function Critter() {
	var obj = {};
	obj.x = (CanvasWidth/2)+(Math.random()*2-1)*(CanvasWidth/2);
	obj.y = (CanvasHeight/2)+(Math.random()*2-1)*(CanvasHeight/2);
	obj.vx = Math.random() * 2 - 1;
	obj.vy = Math.random() * 2 - 1;
	obj.sizeX = 50;
	obj.sizeY = 50;
	obj.image = new Image();
	obj.image.src = "images/octo.png";
	obj.soundFile = "sounds/octo.mp3";
	obj.visible= true;
	
	
	
	obj.update = function() {
		obj.x += obj.vx;
		obj.y += obj.vy;
		obj.bounds();
	};

	obj.bounds = function() {
		
		if ((obj.x < 0) || (obj.x > CanvasWidth)) {
			(obj.vx = obj.vx*-1);
		}
		if ((obj.y <0) || (obj.y > CanvasHeight)) {
			(obj.vy*=-1);
	}
	};
	obj.draw = function() {
				if (obj.visible == true){
					
				if(obj.vx < 0){
					context.save();
					context.scale(-1,1);
					context.drawImage(obj.image, -obj.x, obj.y);
					context.restore();
				}
				else
				
				
				context.drawImage(obj.image, obj.x, obj.y);
		};
	};
		return obj;
}

function Prop() {
	var obj = {};
	obj.x = CanvasWidth*Math.random();
	obj.y = (CanvasHeight/2)+(Math.random()*2-1)*(CanvasHeight/2);
	obj.sizeX = 50;
	obj.sizeY = 50;
	obj.image = new Image();
	obj.image.src = "images/prop.png";
	obj.visible = true;
	
	obj.draw = function() {
		if (obj.visible == true) {
				context.drawImage(obj.image, obj.x, obj.y);
		}
	};
		return obj;
}

function AddProp() {
	prop.push(new Prop());
}

function RemoveProp() {
	var deleteMe = prop.pop();
	deleteMe = null;
}

function TogglePineapple(element) {
	for (var i = 0; i < prop.length; i++)
	{
		prop[i].visible = element.checked;
	}
}

function ToggleCritterOne(element) {
	for (var i = 0; i < 3; i++)
	{
		critter[i].visible = element.checked;
	}
}

function ToggleCritterTwo(element){
	for (var i = 3; i < 8; i++)
	{
		critter[i].visible = element.checked;
	}
}

function ToggleCritterThree(element){
	for (var i = 8; i < 11; i++)
	{
		critter[i].visible = element.checked;
	}
}

var x = 0;
var y = 0;


function loop(){
	update();
	draw();
}

function Background () {
	var obj ={};
	obj.draw = function() {
		context.clearRect(0, 0, CanvasWidth, CanvasHeight);
	var gradient=context.createLinearGradient(0,0,0,CanvasHeight);
		gradient.addColorStop(0.0, "#C0F5E7");
		gradient.addColorStop(0.8, "#3F43E7");
		gradient.addColorStop(0.81,"#AF8553");
		gradient.addColorStop(1.0, "#E6CBAB");
		context.fillStyle=gradient;
		context.fillRect(0, 0, CanvasWidth, CanvasHeight);
		
	};
	return obj;
}


function draw() {
		context.clearRect(0, 0, CanvasWidth, CanvasHeight);
		background.draw();
		for (var i = 0; i < critter.length-1; i++) {
			critter[i].draw();
			}
		for (var i = 0; i < prop.length-1; i++){
			prop[i].draw();
		}
	}
	
function update() {
	for (var i = 0; i < critter.length-1; i++) {
		critter[i].update();
	}
}

function doCritterClick(e)
	{
		var x = e.pageX- CanvasOffsetX; 
		var y = e.pageY - CanvasOffsetY;
		console.log (x + " " + y);
		
		for (var i = 0; i < critter.length-1; i++) {
		
		var myCritter = critter[i];
		if(y > myCritter.y && y < myCritter.y + myCritter.sizeY && x > 
		myCritter.x && x < myCritter.x + myCritter.sizeX && myCritter.visible == true)
		{
		console.log("clicked a critter");
		selection = myCritter ;
		selection.vx = 2 * Math.random() -1;
		selection.vy = 2 * Math.random() -1;
		
		if (critterSound != null){
			critterSound.pause();
		}
		
		critterSound = new Audio(myCritter.soundFile);
		critterSound.play();

		}
	}	
}

function doKeyPress(e){
	var charCode = e.which || e.keyCode;
	console.log (e.keyCode);
	switch (charCode) {
    case 40:
    	selection.vy++;
    	if (selection.vy > 10){
        selection.vy = 10;
        console.log("speed limit hit");
       }
       break;
    case 38:
        selection.vy--;
        if (selection.vy < -10){
        selection.vy = -10;
        console.log("speed limit hit");
       }
        break;
    case 37:
        selection.vx--;
        if (selection.vx < -10){
        selection.vx = -10;
        console.log("speed limit hit");
       }
        break;
    case 39:
        selection.vx++;
        if (selection.vx > 10){
        selection.vx = 10;
        console.log("speed limit hit");
       }
        break;
	}
}

