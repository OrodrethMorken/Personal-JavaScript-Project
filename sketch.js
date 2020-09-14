var c1;
var c2;
var c3;
var c4;
var matrix;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 400);
  c1 = color(400, 0, 0);
  c2 = color(0, 400, 0);
  c3 = color(0,0,400);
  c4 = color(0,0,0);
  createMatrix();
}

function createMatrix(){
 matrix = [];

  for (let i = 0; i < width; i++) {
    matrix[i] = [];
    for (let j = 0; j < height; j++) {
      c1mid = lerpColor(c1, c3, j / height);
      c2mid = lerpColor(c2, c4, j / height);
      matrix[i][j] = lerpColor(c1mid, c2mid, i / width);
    }
  }

}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      stroke(matrix[i][j]);
      point(i, j);
    }
  }
}
