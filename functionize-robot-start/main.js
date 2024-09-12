// DRAW ROBOT FACE

// Set up
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
var eyebrow = 180;
var height = +prompt("How high?");

// FUNCTIONS
function circle(x, y, r, type, colour1, colour2, colour3) {
  eval(`ctx.${type}Style = 'rgb(${colour1}, ${colour2}, ${colour3})'`);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  eval(`ctx.${type}()`);
}
function rect(x, y, w, h, type, colour1, colour2, colour3) {
  eval(`ctx.${type}Style = "rgb(${colour1}, ${colour2}, ${colour3})"`);
  eval(`ctx.${type}Rect(${x}, ${y}, ${w}, ${h})`);
}
function triangle(x1, y1, x2, y2, x3, y3, type, colour1, colour2, colour3) {
  eval(`ctx.${type}Style = "rgb(${colour1}, ${colour2}, ${colour3})"`);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x1, y1);
  eval(`ctx.${type}()`);
}
function line(width, x1, y1, x2, y2, colour1, colour2, colour3) {
  ctx.lineWidth = width;
  ctx.strokeStyle = `rgb(${colour1}, ${colour2}, ${colour3})`;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

requestAnimationFrame(draw);

function draw() {
  // Clear previous frame
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Rectangle Behind Head for Ears
  rect(80, 260, 460, 80, "fill", 100, 100, 100);
  // Filled Triangle for Hair
  triangle(180, 80, 140, 100, 220, 100, "fill", 100, 100, 100);
  // Filled Triangle for Hair
  triangle(340, 80, 300, 100, 380, 100, "fill", 100, 100, 100);
  // Outlined Triangle for Hair
  triangle(260, 80, 220, 100, 300, 100, "stroke", 100, 100, 100);
  // Outlined Triangle for Hair
  triangle(420, 80, 380, 100, 460, 100, "stroke", 100, 100, 100);
  // Filled Triangle for Neck
  triangle(300, 200, 220, 600, 380, 600, "fill", 100, 100, 100);
  // Rectangle Head
  rect(100, 100, 400, 400, "fill", 180, 180, 180);
  // Filled Circle for Left Eye Socket
  circle(200, 250, 50, "fill", 235, 235, 235);
  // Filled Circle for Right Eye Socket
  circle(400, 250, 50, "fill", 235, 235, 235);
  // Rectangle for Mouth
  rect(200, 350, 200, 60, "fill");
  // Horizontal Line for Teeth
  line(1, 200, 380, 400, 380, 180, 180, 180);
  // First Vertical Line for Teeth
  line(1, 250, 350, 250, 410, 180, 180, 180);
  // Second Vertical Line for Teeth
  line(1, 300, 350, 300, 410, 180, 180, 180);
  // Third Vertical Line for Teeth
  line(1, 350, 350, 350, 410);
  // Filled Circle for Left Eye
  circle(200, 250, 30, "fill", 100, 100, 100);
  // Filled Circle for Right Eye
  circle(400, 250, 10, "fill", 100, 100, 100);
  // Outlined Circle for Left Eye Socket
  circle(200, 250, 50, "stroke", 100, 100, 100);
  // Outlined Circle for Right Eye Socket
  circle(400, 250, 50, "stroke", 100, 100, 100);
  // Line for Left Eyebrow
  line(2, 150, 180, 250, 180);

  // Outlined Triangle for Nose
  triangle(300, 280, 320, 320, 280, 320, "stroke");

  // draw eyebrow
  line(2, 350, eyebrow, 450, 180);

  // animation

  if (eyebrow > 180 - height) {
    eyebrow--;
  }

  requestAnimationFrame(draw);
}
