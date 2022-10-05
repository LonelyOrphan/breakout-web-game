const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// initial starting point for ball
let x = canvas.width / 2;
let y = canvas.height - 30;

// add to initial starting point to get ball to move
let dx = 2;
let dy = -2;

const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
  // Bounce off side walls
  if (x + dx > canvas.width - ballRadius || x + dx < 0) {
    dx = -dx;
  }
  // Bounce off top and bottom walls
  if (y + dy > canvas.height - ballRadius || y + dy < 0) {
    dy = -dy;
  }
}

setInterval(draw, 10);
