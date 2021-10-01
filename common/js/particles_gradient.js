var canvas = document.querySelector("canvas");
// var canvas = document.getElementById('canvas');
// var cover = document.getElementById('cover');


canvas.width = window.innerWidth;
// canvas.height = window.innerHeight / 10 * 4;
canvas.height = 420 + window.innerWidth * 0.075;

// var title = document.createElement("h1");
// title.innerHTML = "Hi, I'm Anna. yeah";
// cover.appendChild(title)
//$(function(){
//   $("canvas").css("background", "#4f4f4f");
//
//});

var c = canvas.getContext("2d");


//var a = Math.random(20, 200);
//var b = Math.random(20, 30);
//var color = [ '#ff3399', '#330066', '#ff6666', '#cc0099', '#660099', '#ff33cc', '#9933cc' ];

//c.fillRect(100, 100, 100, 100);

/*
c.beginPath();
c.arc(500, 300, 50, 0, Math.PI * 2, false);
//c.arc(200, 200, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();
c.fillStyle = 'skyblue';
c.fill();
*/

// var mouse = {
//   x: undefined,
//   y: undefined
// };

// var maxRadius = 5000;
// var minRadius = Math.random() * 800 + 500;
var opacity = 1;

var colorArray = [
  [245,167,21, 1],//yellow
  // [216,16,59, 1],//red
  [112,2,209, 1],//purple
  [142,0,114, 1]//reddish purple
  // "rgba(245,167,21, 1)", 
  // "rgba(216,16,59, 1)", //yellow
  // "rgba(112,2,209, 1)", //purple
  // "rgba(142,0,114, 1)", //reddish purple
];




// window.addEventListener("mousemove", function(event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

window.addEventListener("resize", function() {

  if(window.innerWidth > 767){
    canvas.width = window.innerWidth;
    canvas.height = 420 + window.innerWidth * 0.075;
    // canvas.height = window.innerHeight / 2;
    // canvas.height = window.innerWidth - window.innerWidth * 0.685;
    // canvas.height = window.innerWidth - window.innerWidth / 100 * 70;
  
    // init();
    init_spec();

  }
});

function Circle(x, y, dx, dy, radius, minRadius, hx) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = minRadius;
  this.hx = hx;
  // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  // var colorStop = colorArray[Math.floor(Math.random() * colorArray.length)];
  var colorStop = colorArray[Math.floor(Math.random() * colorArray.length)];

  // console.log(colorStop);

  
  // this.my_gradient = gradientArray[Math.floor(Math.random() * gradientArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    var gradient = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
      gradient.addColorStop(0.2, "rgba("+ colorStop[0] + ", " + colorStop[1] + ", " + colorStop[2] + ", " + colorStop[3] +")");
      // gradient.addColorStop(0, colorStop);
      // gradient.addColorStop(1, "rgba(255,255,255,0)");
      gradient.addColorStop(1, "rgba("+ colorStop[0] + ", " + colorStop[1] + ", " + colorStop[2] + ", 0)");
    c.fillStyle = gradient;
    c.fill();
    // c.globalCompositeOperation = "overlay";
  };

  this.update = function() {
    if (this.x  > innerWidth || this.x  < 0) {
      this.dx = -this.dx;
    }
    if (this.y  > this.hx || this.y  < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // //interactivity
    // if (
    //   mouse.x - this.x < 85 &&
    //   mouse.x - this.x > -85 &&
    //   mouse.y - this.y < 75 &&
    //   mouse.y - this.y > -75
    // ) {
    //   if (this.radius < maxRadius) {
    //     this.radius += 0.4;
    //   }
    // } else if (this.radius > this.minRadius) {
    //   this.radius -= 0.4;
    // }

    this.draw();
  };
}
function CircleSpec(x, y, dx, dy, radius, color, hx) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.hx = hx;
  // var colorStop = colorArray[Math.floor(Math.random() * colorArray.length)];

  // console.log(colorStop);

  
  // this.my_gradient = gradientArray[Math.floor(Math.random() * gradientArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    var gradient = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
      gradient.addColorStop(0.2, "rgba("+ this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ", " + this.color[3] +")");
      // gradient.addColorStop(0, colorStop);
      // gradient.addColorStop(1, "rgba(255,255,255,0)");
      gradient.addColorStop(1, "rgba("+ this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ", 0)");
    c.fillStyle = gradient;
    c.fill();
    c.globalCompositeOperation = "overlay";
  };

  this.update = function() {
    if (this.x  > innerWidth || this.x  < 0) {
      this.dx = -this.dx;
    }
    if (this.y  > this.hx || this.y  < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // //interactivity
    // if (
    //   mouse.x - this.x < 85 &&
    //   mouse.x - this.x > -85 &&
    //   mouse.y - this.y < 75 &&
    //   mouse.y - this.y > -75
    // ) {
    //   if (this.radius < maxRadius) {
    //     this.radius += 0.4;
    //   }
    // } else if (this.radius > this.minRadius) {
    //   this.radius -= 0.4;
    // }

    this.draw();
  };
}

var circleArray = [];
var circleArraySpec = [];
var hx = 420 + window.innerWidth * 0.075;
// function init() {
//   circleArray = [];

//   for (var i = 0; i < 50; i++) {
//     var minRadius = Math.random() * 2000 + 5;
//     var radius = Math.random() * 1000 + 200;
//     var x = Math.random() * innerWidth;
//     var y = Math.random() * h;
//     var dx = (Math.random() + 0.5); //speed, velocity
//     var dy = (Math.random() + 0.5); //speed, velocity for y (in px) //Mat.random() gives 0 to 1, so we get -0.5 to 0.5

//     circleArray.push(new Circle(x, y, dx, dy, radius, minRadius));
//   }
// }

function init_spec(){
  circleArray = [];
  circleArraySpec = [];
  

  for (var i = 0; i < 5; i++) {
    var minRadius = Math.random() * 1000 + 20; //from 500 to 1999 + 500 //important only for interactivity
    var radius = Math.random() * innerWidth + 100; // from 1200 to 999 + 1200
    var x = Math.random() * innerWidth;
    var y = Math.random() * hx;
    var dx = (Math.random() + 0.5); //speed, velocity
    var dy = (Math.random() + 0.5); //speed, velocity for y (in px) //Mat.random() gives 0 to 1, so we get -0.5 to 0.5
    

    circleArray.push(new Circle(x, y, dx, dy, radius, minRadius, hx));
  }

  circleArraySpec.push(new CircleSpec(200, 400, 0.2, 0.2, 500, colorArray[1]));
  circleArraySpec.push(new CircleSpec(100, 150, -0.3, 0.4, 700, colorArray[2]));
  circleArraySpec.push(new CircleSpec(800, 120, -0.1, -0.2, 400, colorArray[0]));
  // circleArraySpec.push(new CircleSpec(1400, 100, 0.3, -0.3, 550, colorArray[3]));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  for (var i = 0; i < circleArraySpec.length; i++) {
    circleArraySpec[i].update();
  }
}

// function text(){
//   c.font = "78px Lato";
//   c.fillStyle = "#ddd";
//   c.fillText("Hi, I'm Anna, yeah!", 100, 90);
//   c.globalCompositeOperation = "color-burn";
// }

init_spec();
animate();
// text();