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
      this.symmetry.option(i);
    }
    this.symmetry.selected(6);
    this.textFieldColor = createElement("li","Colore").parent("#options");
    this.textFieldColor.attribute("id","color");
    this.color = createColorPicker(color(255)).parent("#color");
    this.textFieldWeight = createElement("li","Spessore").parent("#options");
    this.textFieldWeight.attribute("id","weight");
    this.strokeW = createSelect().parent("#weight");
    for(let i = 0; i < 20; i++){
      this.strokeW.option(i);
    }
    this.strokeW.selected(2);
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
  }

  clean(){
      loop();
      background(0);
  }

  clear(){
    this.guiContainer.remove();
    this.infoContainer.remove();
  }

  draw(){
    let timeStart = millis();
    translate(width/2,height/2);
    if(mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
      let angle = 360/this.symmetry.value();
      console.log(angle);
      const pointX = mouseX - (width/2);
      const pointY = mouseY - (height/2);
      const ppointX = pmouseX - (width/2);
      const ppointY = pmouseY - (height/2);
      for(let i = 0; i < this.symmetry.value(); i++){
        rotate(angle);
        stroke(this.color.value());
        strokeWeight(this.strokeW.value());
        line(pointX,pointY,ppointX,ppointY);
      }
    }
    let timeEnd = millis();
    let totalTime = timeEnd-timeStart;
    this.infoD.elt.innerText = (totalTime/1000).toString()+"s";
  }
}
