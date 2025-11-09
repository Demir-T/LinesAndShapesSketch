function setup() {
  createCanvas(800, 600);
  background(173, 216, 230); // Sky blue background
  strokeWeight(6);
  stroke(0);
  noFill();

  // --- SUN ---
  fill(255, 255, 0);
  ellipse(700, 100, 100, 100); // Sun body
  fill(0);
  ellipse(680, 85, 15, 15); // Left eye
  ellipse(720, 85, 15, 15); // Right eye
  noFill();
  arc(700, 105, 40, 20, 0, PI); // Smiling mouth

  // --- UPPER BLUE FLAG ---
  stroke(0);
  fill(0, 0, 255);
  rect(50, 80, 150, 100); // Main blue area
  strokeWeight(4);
  fill(0);
  line(50, 80, 50, 250); // Flag pole
  strokeWeight(2);
  fill(0, 0, 255);
  rect(130, 80, 70, 100); // Right side stripes
  line(150, 80, 150, 180);
  line(170, 80, 170, 180);
  fill(0, 0, 200);
  triangle(50, 80, 120, 150, 50, 180); // Inner triangle pattern

  // --- STICK FIGURES (TOP AREA) ---
  stroke(0);
  strokeWeight(6);

  // Left stick figure
  line(280, 100, 280, 150); // Body
  ellipse(280, 80, 20, 20); // Head
  line(280, 110, 260, 95); // Left arm
  line(280, 110, 300, 130); // Right arm
  line(280, 150, 270, 175); // Left leg
  line(280, 150, 290, 175); // Right leg

  // Right stick figure
  line(350, 100, 350, 150); // Body
  ellipse(350, 80, 20, 20); // Head
  line(350, 110, 370, 95); // Arm
  line(350, 150, 340, 175); // Left leg
  line(350, 150, 360, 175); // Right leg

  // Holding hands
  line(300, 120, 340, 110);

  // --- LOWER RED-WHITE FLAG ---
  stroke(0);
  strokeWeight(4);
  fill(255, 0, 0);
  rect(50, 350, 150, 100); // Red area
  fill(255);
  rect(50, 350, 80, 80); // White area
  fill(255, 0, 0);
  line(50, 350, 50, 550); // Flag pole
  line(150, 350, 150, 400);
  line(170, 350, 170, 400);

  // --- TENTS ---
  fill(0);
  stroke(0);
  strokeWeight(3);
  triangle(250, 550, 300, 450, 350, 550); // Left tent
  triangle(400, 550, 450, 450, 500, 550); // Right tent

  fill(255);
  rect(290, 520, 20, 30); // Door left tent
  rect(440, 520, 20, 30); // Door right tent

  // --- GROUND LINE ---
  stroke(0);
  strokeWeight(8);
  line(20, 550, 780, 550);
}

function draw() {
  // Static scene
}
