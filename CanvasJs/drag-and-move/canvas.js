const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Rect
// c.fillStyle = 'red';
// c.fillRect(50, 50, 100, 100);

// Line
// c.beginPath();
// c.moveTo(200, 100);
// c.lineTo(250, 250);
// c.lineTo(300, 200);
// c.strokeStyle = 'blue';
// c.stroke();

// Arc / Circle
// c.beginPath();
// c.arc(200, 300, 30, Math.PI * 2, false)
// c.strokeStyle = 'red';
// c.stroke();

const mouse = {
  x: null,
  y: null,
};
const colorArray = ['#FF4858', '#1B7F79', '#00CCC0', '#72F2EB', '#747F7F'];
let circleArray = [];
let circle;

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;

  circle.move(event.x, event.y);
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener('mousedown', (event) => {
  circle.take(event.x, event.y);
});

window.addEventListener('mouseup', (event) => {
  circle.drop();
});

class Circle {
  constructor(x, y, radius, color = 'black') {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isTaked = false;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
    this.draw();
  }

  checkIsTaked(x, y) {
    const distanceCircle = this.x - x;
    const distanceMouse = this.y - y;
    const distance = Math.sqrt(
      Math.pow(distanceCircle, 2) + Math.pow(distanceMouse, 2)
    );

    return distance;
  }

  take(x, y) {
    if (this.checkIsTaked(x, y) < this.radius) {
      this.isTaked = true;
    }
  }

  drop() {
    this.isTaked = false;
  }

  move(x, y) {
    if (this.isTaked) {
      this.x = x;
      this.y = y;
    }
  }
}

function init() {
  circle = new Circle(300, 300, 30);
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  circle.update();
}

init();
