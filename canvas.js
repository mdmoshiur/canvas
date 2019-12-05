var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var w = window.innerWidth;
var h = window.innerHeight;
canvas.width = w;
canvas.height = h;
//colors
var colors = ['#FF0000', '#01DF01', '#0101DF', '#FF0040', '#000000','#2EFEF7','#B404AE','#fff','#FFFF00'];
//Turn transparency on
c.globalAlpha = .2;

function Circle(x, y, radius, dx, dy, fillColor){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.fillColor = fillColor;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.fillColor;
    c.fill();
  }

  this.update = function() {
    if(this.x + this.radius > w || this.x-this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > h || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

var circleArray = [];

for( var i = 0; i<100; i++){
  var radius = Math.random()* 18 + 7;
  var x = Math.random() * (w - radius * 2) + radius;
  var y = Math.random() * (h - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;
  var fillColor = colors[Math.floor(i%colors.length)];
  circleArray.push(new Circle(x,y,radius,dx,dy,fillColor));
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, w, h);
  for(var i = 0; i < circleArray.length; i++){
    circleArray[i].draw();
    circleArray[i].update();
  }

}

animate();
