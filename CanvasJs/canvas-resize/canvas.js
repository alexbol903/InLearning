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

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const colorArray = ['#FF4858', '#1B7F79', '#00CCC0', '#72F2EB', '#747F7F'];
let circleArray = [];

function init() {
  let radius, x, y, dx, dy, color;
  circleArray = [];

  for (let i = 0; i < 1000; i++) {
    radius = Math.random() * 3 + 1;
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius * 2) + radius;
    dx = Math.random() - 0.5;
    dy = Math.random() - 0.5;
    color = colorArray[Math.floor(Math.random() * colorArray.length)];

    circleArray.push(new Circle(x, y, dx, dy, radius, color));
  }

  animate();
}

class Circle {
  constructor(x, y, dx, dy, radius, color = 'black') {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.maxRadius = 30;
    this.color = color;
    this.range = 50;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Interactivity
    if (
      mouse.x - this.x < this.range &&
      mouse.x - this.x > -this.range &&
      mouse.y - this.y < this.range &&
      mouse.y - this.y > -this.range
    ) {
      if (this.radius < this.maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (const circle of circleArray) {
    circle.update();
  }
}

init();
