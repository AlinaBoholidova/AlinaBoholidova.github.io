var canvas;
var context;
var screenH;
var screenW;
var stars = [];
var colors = ["rgba(255, 255, 200, ", "rgba(0, 220, 140, ", "rgba(255, 218, 0, "];
var numStars = 700;

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

$('document').ready(function() {
	screenH = $(window).height();
	screenW = $(window).width();
	
	canvas = $('#space');
	
	canvas.attr('height', screenH);
	canvas.attr('width', screenW);
	context = canvas[0].getContext('2d');
	
	for(var i = 0; i < numStars; i++) {
		var x = Math.round(Math.random() * screenW);
		var y = Math.round(Math.random() * screenH);
		var length = 1 + Math.random() * 2;
		var opacity = Math.random();
		
		var star = new Star(x, y, length, opacity);
		
		stars.push(star);
	}
	
    animateInterval = setInterval(animate, 15);
});

function animate() {
	context.clearRect(0, 0, screenW, screenH);
	$.each(stars, function() {
		this.draw(context);
	})
}

function stopAnimation()
{
    clearInterval(animateInterval);
}

function Star(x, y, length, opacity) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.length = parseInt(length);
	this.opacity = opacity;
	this.factor = 1;
	this.increment = Math.random() * .03;
}

Star.prototype.draw = function() {
	context.rotate((Math.PI * 1 / 10));
	
	context.save();
	
	context.translate(this.x, this.y);
	
	if(this.opacity > 1) {
		this.factor = -1;
	}
	else if(this.opacity <= 0) {
		this.factor = 1;
		
		this.x = Math.round(Math.random() * screenW);
		this.y = Math.round(Math.random() * screenH);
	}
		
	this.opacity += this.increment * this.factor;
	
	context.beginPath()
	for (var i = 5; i--;) {
		context.lineTo(0, this.length);
		context.translate(0, this.length);
		context.rotate((Math.PI * 2 / 10));
		context.lineTo(0, - this.length);
		context.translate(0, - this.length);
		context.rotate(-(Math.PI * 6 / 10));
	}
	context.lineTo(0, this.length);
	context.closePath();
	context.fillStyle = colors[getRandomInt(3)] + this.opacity + ")";
	context.shadowBlur = 5;
	context.shadowColor = '#fff';
	context.fill();
	
	context.restore();
}