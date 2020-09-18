var c1;
var c2;
var c3;
var c4;
var matrix;
var textArray = [];
// var textI;
// var textV;
// var textO;
// var textS;
// var textC;
var saveButton;
var addTextButton;
var removeTextButton;
// var textField;
alert("Benvenuti in questa pagina. \nQui potrete creare delle immagini dove potrete scegliere come colorare lo sfondo e inserire le vostre frasi preferite.\nPer salvare l'immagine premete il tasto apposito");

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
  addTextButton = createButton("aggiungi Testo").parent("#textContainer");
  addTextButton.mousePressed(addText);
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
  loop();
}

function addText(){
  let newText = new TextBox(textArray.length);
  newText.removeTextButton = createButton("Rimuovi Testo").parent(newText.textFieldC.id());
  newText.removeTextButton.mousePressed(function(){return removeText(newText)});
  addTextButton.parent("#textContainer");
  textArray.push(newText);
  // createElement("/UL","").parent("#textContainer");
}

function removeText(textB){
  // console.log(textB);
  // console.log(textB.position);
  // textB.textI.remove();
  // textB.textFieldT.remove();
  // textB.textV.remove();
  // textB.textFieldV.remove();
  // textB.textO.remove();
  // textB.textFieldO.remove();
  // textB.textS.remove();
  // textB.textFieldS.remove();
  // textB.textC.remove();
  // textB.removeTextButton.remove();
  // textB.textFieldC.remove();
  textB.textFieldContainer.remove();
  let temp = textArray.splice(textB.position,1);
  console.log(temp);
  textArray.forEach((item, i) => {
    item.updatePosition(i);
  });

  loop();
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

  textArray.forEach(textBox => {
    if(textBox.textI != undefined && textBox.textI.value().length>0){
      noStroke();
      fill(textBox.textC.color());
      textSize(textBox.textS.value());
      textAlign(CENTER);
      text(textBox.textI.value(), textBox.textO.value(), textBox.textV.value());
    }
  });
  noLoop();
}
