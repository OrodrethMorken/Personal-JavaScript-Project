class Snowflake {

  constructor() {
    colorMode(RGB,255);
    angleMode(DEGREES);
    this.guiContainer = createDiv("").parent("#gui");
    this.guiContainer.attribute("id","options");
    this.textFieldSymmetry = createElement("li","Simmetria").parent("#options");
    this.textFieldSymmetry.attribute("id","symmetry");
    this.symmetry = createSelect().parent("#symmetry");
    for(let i = 0; i < 20; i++){
      this.symmetry.option(i+1);
    }
    this.symmetry.selected(6);
    this.textFieldColor = createElement("li","Colore").parent("#options");
    this.textFieldColor.attribute("id","color");
    this.color = createColorPicker(color(255,0,0)).parent("#color");
    this.textFieldWeight = createElement("li","Spessore").parent("#options");
    this.textFieldWeight.attribute("id","weight");
    this.strokeW = createSelect().parent("#weight");
    for(let i = 0; i < 20; i++){
      this.strokeW.option(i+1);
    }
    this.strokeW.selected(2);
    this.textFieldBackground = createElement("li","Sfondo").parent("#options");
    this.textFieldBackground.attribute("id","background");
    this.backgroundF = createColorPicker(color(0)).parent("#background");
    this.clearButton = createButton("Pulisci Schermo").parent("#options");
    this.clearButton.mousePressed(this.clean);

    this.infoContainer = createDiv("").parent("#info");
    this.infoContainer.attribute("id","infoContainer");
    this.infoTextC = createElement("li", "tempo creazione matrice: ").parent("#infoContainer");
    this.infoTextC.attribute("id", "infoC")
    this.infoC = createElement("li", "a").parent("#infoC");
    this.infoTextD = createElement("li", "tempo Visualizzazione matrice: ").parent("#infoContainer");
    this.infoTextD.attribute("id", "infoD")
    this.infoD = createElement("li", "").parent("#infoD");
    this.infoC.elt.innerText = "0s";
    loop();
    background(0);
    this.array = [];
  }

  clean(){
      loop();
      background(sfondo.backgroundF.value());
      sfondo.array = [];
  }

  clear(){
    this.guiContainer.remove();
    this.infoContainer.remove();
  }

  draw(){
    let timeStart = millis();
    background(this.backgroundF.value());
    translate(width/2,height/2);
    if(mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
      const pointX = mouseX - (width/2);
      const pointY = mouseY - (height/2);
      const ppointX = pmouseX - (width/2);
      const ppointY = pmouseY - (height/2);
      this.array.push(new Points(pointX, pointY, ppointX, ppointY, this.color.value()));
    }
    let angle = 360/this.symmetry.value();
    for(let i = 0; i < this.symmetry.value(); i++){
      rotate(angle);
      strokeWeight(this.strokeW.value());
      // line(pointX,pointY,ppointX,ppointY);
      this.array.forEach(item => {
        stroke(item.color);
        line(item.x, item.y, item.px, item.py);
      });
    }
    let timeEnd = millis();
    let totalTime = timeEnd-timeStart;
    this.infoD.elt.innerText = (totalTime/1000).toString()+"s";
  }
}

class Points {
  constructor(x,y,px,py,color) {
    this.x = x;
    this.y = y;
    this.px = px;
    this.py = py;
    this.color = color;
  }
}
