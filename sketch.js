var selector;
var selected;
var sfondo;
var textArray = [];
var saveButton;
var addTextButton;
var helpButton;
var temp;
const COLORBLEND = "Colori";
const SNOWFLAKE = "Fiocchi";
alert("Benvenuti in questa pagina. \nQui potrete creare delle immagini dove potrete creare lo sfondo e inserire il testo preferite.\nPer salvare l'immagine premete il tasto apposito");

function setup() {
  createCanvas(400, 400, P2D).parent("#canvas");
  selector = createSelect().parent("#typeSelector");
  selector.option(COLORBLEND);
  selector.option(SNOWFLAKE);
  selector.selected(SNOWFLAKE);
  selector.changed(changeBackground);
  changeBackground();

  addTextButton = createButton("aggiungi Testo").parent("#textContainer");
  addTextButton.mousePressed(addText);
  helpButton = createButton("?").parent("#typeSelector");
  helpButton.mousePressed(help);
  saveButton = createButton("Salva Immagine").parent("#typeSelector");
  saveButton.mousePressed(createImageFile);
}

function changeBackground() {
  let option = selector.value();
  if(option != selected){
    if(sfondo != undefined){
      sfondo.clear();
    }
    background(0);
    if(option == COLORBLEND){
      sfondo = new ColorBlend();
    }else if (option == SNOWFLAKE) {
      sfondo = new Snowflake();
    }
    selected = option;
  }
  loop();
}

function help(){
  if(selected == COLORBLEND){
    alert("Lo sfondo viene creato facendo un passaggio di colore dal colore degli angoli");
  } else if (selected == SNOWFLAKE) {
    alert("Cliccando e trascinando sullo sfondo verranno create delle linee a rotazione");
  }
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
  sfondo.draw();
  textArray.forEach(textBox => {
    if(textBox.textI != undefined && textBox.textI.value().length>0){
      textBox.draw();
    }
  });
}

// function mouseDragged(event) {
//   // console.log(mouseY-pmouseY);
//   if(mouseX>0 && mouseY>0 && mouseX<width && mouseY < height){
//     textArray.forEach(item => {
//       item.move();
//     });
//
//     loop();
//   }
// }
