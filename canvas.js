var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var w = window.innerWidth;
var h = 0.5*window.innerHeight;
canvas.width = w;
canvas.height = h;

function Circle(x, y, radius, dx, dy){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.strokeStyle = '#00FF00'
    c.stroke();
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

for( var i = 0; i<50; i++){
  var radius = Math.random()* 20 + 10;
  var x = Math.random() * (w - radius * 2) + radius;
  var y = Math.random() * (h - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;

  circleArray.push(new Circle(x,y,radius,dx,dy));
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
