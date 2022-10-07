const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let ballColor = "green";
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

// initial starting point for ball
let x = canvas.width / 2;
let y = canvas.height - 30;

// add to initial starting point to get ball to move
let dx = 2;
let dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
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
    ballColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  // Bounce off top and bottom walls
  if (y + dy > canvas.height - ballRadius || y + dy < 0) {
    dy = -dy;
    ballColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

// listen for key press and release
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// functions for handling key press and release
function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

//  call draw function every 10 milliseconds
setInterval(draw, 10);
