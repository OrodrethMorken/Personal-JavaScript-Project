// var c1;
// var c2;
// var c3;
// var c4;
// var matrix;
var sfondo;
var textArray = [];
// var textI;
// var textV;
// var textO;
// var textS;
// var textC;
var saveButton;
var addTextButton;
var temp;
// alert("Benvenuti in questa pagina. \nQui potrete creare delle immagini dove potrete scegliere come colorare lo sfondo e inserire le vostre frasi preferite.\nPer salvare l'immagine premete il tasto apposito");

function setup() {
  createCanvas(400, 400, P2D).parent("#canvas");
  sfondo = new ColorBlend();
  addTextButton = createButton("aggiungi Testo").parent("#textContainer");
  addTextButton.mousePressed(addText);
  saveButton = createButton("Salva Immagine").parent("#imageSave");
  saveButton.mousePressed(createImageFile);
}

function addText(){
  let newText = new TextBox(textArray.length);
  newText.removeTextButton = createButton("Rimuovi Testo").parent(newText.textFieldC.id());
  newText.removeTextButton.mousePressed(function(){return removeText(newText)});
  addTextButton.parent("#textContainer");
  textArray.push(newText);
}

function removeText(textB){
  textB.textFieldContainer.remove();
  textArray.splice(textB.index,1);
  textArray.forEach((item, i) => {
    item.updateindex(i);
  });

  loop();
}

function createImageFile(){
  let imageName = "image"+day()+hour()+minute();
  saveCanvas(imageName,"jpg");
}

function draw() {
  // background(0);
  // noStroke();
  // strokeWeight(3);
  // for (let i = 0; i < width; i+=2) {
  //   for (let j = 0; j < height; j+=2) {
  //     stroke(matrix[i][j]);
  //     point(i, j);
  //   }
  // }
  sfondo.draw();

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
