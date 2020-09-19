class ColorBlend {
  constructor() {
    colorMode(RGB, 400);
    this.textFieldUL = createElement("li", "Angolo alto/sinistra").parent("#colors");
    this.textFieldUL.attribute("id", "color1");
    this.textFieldUR = createElement("li", "Angolo alto/destra").parent("#colors");
    this.textFieldUR.attribute("id", "color2");
    this.textFieldDL = createElement("li", "Angolo basso/sinistra").parent("#colors");
    this.textFieldDL.attribute("id", "color3");
    this.textFieldDR = createElement("li", "Angolo basso/destra").parent("#colors");
    this.textFieldDR.attribute("id", "color4");
    this.c1 = createColorPicker(color(400, 0, 0)).parent("#color1");
    this.c1.input(function(){return sfondo.createMatrix(sfondo)});
    this.c2 = createColorPicker(color(0, 400, 0)).parent("#color2");
    this.c2.input(function(){return sfondo.createMatrix(sfondo)});
    this.c3 = createColorPicker(color(0,0,400)).parent("#color3");
    this.c3.input(function(){return sfondo.createMatrix(sfondo)});
    this.c4 = createColorPicker(color(0,0,0)).parent("#color4");
    this.c4.input(function(){return sfondo.createMatrix(sfondo)});
    this.infoTextC = createElement("li", "tempo creazione matrice: ").parent("#info");
    this.infoTextC.attribute("id", "infoC")
    this.infoC = createElement("li", "a").parent("#infoC");
    this.infoTextD = createElement("li", "tempo Visualizzazione matrice: ").parent("#info");
    this.infoTextD.attribute("id", "infoD")
    this.infoD = createElement("li", "").parent("#infoD");
    this.createMatrix(this);
  }

  createMatrix(blend){
    let timeStart = millis();
    blend.matrix = [];
    for (let i = 0; i < width; i++) {
      blend.matrix[i] = [];
      for (let j = 0; j < height; j++) {
        let c1mid = lerpColor(blend.c1.color(), blend.c3.color(), j / height);
        let c2mid = lerpColor(blend.c2.color(), blend.c4.color(), j / height);
        blend.matrix[i][j] = lerpColor(c1mid, c2mid, i / width);
      }
    }
    let timeEnd = millis();
    let totalTime = timeEnd-timeStart;
    blend.infoC.elt.innerText = (totalTime/1000).toString()+"s";
    // console.log(totalTime);
    loop();
  }

  draw(){
    let timeStart = millis();
    noStroke();
    strokeWeight(3);
    for (let i = 0; i < width; i+=2) {
      for (let j = 0; j < height; j+=2) {
        stroke(this.matrix[i][j]);
        point(i, j);
      }
    }
    let timeEnd = millis();
    let totalTime = timeEnd-timeStart;
    this.infoD.elt.innerText = (totalTime/1000).toString()+"s";
  }
}
