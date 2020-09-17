var c1;
var c2;
var c3;
var c4;
var matrix;
var textI;
var textV;
var textO;
var textS;
var textC;
var saveButton;

function setup() {
  createCanvas(400, 400).parent("#canvas");
  colorMode(RGB, 400);
  c1 = createColorPicker(color(400, 0, 0)).parent("#color1");
  c1.input(createMatrix);
  c2 = createColorPicker(color(0, 400, 0)).parent("#color2");
  c2.input(createMatrix);
  c3 = createColorPicker(color(0,0,400)).parent("#color3");
  c3.input(createMatrix);
  c4 = createColorPicker(color(0,0,0)).parent("#color4");
  c4.input(createMatrix);
  createMatrix();
  textI = createInput("").parent("#textInput");
  textO = createSlider(0, width, width/2, 10).parent("#textOrizontal");
  textV = createSlider(0, height, height/2, 10).parent("#textVertical");
  textS = createSlider(10, width, 100, 10).parent("#sizeText");
  textC = createColorPicker(color(400)).parent("#textColor");
  saveButton = createButton("Salva Immagine").parent("#imageSave");
  saveButton.mousePressed(createImageFile);
}

function createMatrix(){
 matrix = [];

  for (let i = 0; i < width; i++) {
    matrix[i] = [];
    for (let j = 0; j < height; j++) {
      c1mid = lerpColor(c1.color(), c3.color(), j / height);
      c2mid = lerpColor(c2.color(), c4.color(), j / height);
      matrix[i][j] = lerpColor(c1mid, c2mid, i / width);
    }
  }

}

function createImageFile(){
  if(textI.value().length>0){
    saveCanvas(textI.value(),"jpg");
  }else {
    saveCanvas("Image","jpg");
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
  if(textI.value().length>0){
    noStroke();
    fill(textC.color());
    textSize(textS.value());
    textAlign(CENTER);
    text(textI.value(), textO.value(), textV.value());
  }
}
