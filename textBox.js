class TextBox {

  constructor(position) {
    this.position = position;
    this.textFieldContainer = createElement("div").parent("#textContainer");
    this.textFieldContainer.attribute("class", "textBoxH");
    this.textFieldContainer.attribute("id", "textContainer"+position);
    this.textFieldT = createElement("li", "Testo").parent("#textContainer"+position);
    this.textFieldT.attribute("id", "textInput"+position);
    this.textI = createInput("").parent("#textInput"+position);
    this.textFieldV = createElement("li", "Posizione Verticale Testo").parent("#textContainer"+position);
    this.textFieldV.attribute("id", "textVertical"+position);
    this.textV = createSlider(0, height, height/2, 10).parent("#textVertical"+position);
    this.textFieldO = createElement("li", "Posizione Orizzontale Testo").parent("#textContainer"+position);
    this.textFieldO.attribute("id", "textOrizzontal"+position);
    this.textO = createSlider(0, width, width/2, 10).parent("#textOrizzontal"+position);
    this.textFieldS = createElement("li", "Grandezza Testo").parent("#textContainer"+position);
    this.textFieldS.attribute("id", "sizeText"+position);
    this.textS = createSlider(10, width, 100, 10).parent("#sizeText"+position);
    this.textFieldC = createElement("li", "Colore Testo").parent("#textContainer"+position);
    this.textFieldC.attribute("id", "textColor"+position);
    this.textC = createColorPicker(color(400)).parent("#textColor"+position);
    // this.updatePosition(position);
    this.textI.input(loop);
    this.textV.input(loop);
    this.textO.input(loop);
    this.textS.input(loop);
    this.textC.input(loop);
  }

  updatePosition(position){
    // console.log("old pos: "+this.position+" new pos: "+position);
    if(this.position != position){
      this.position = position;
      this.textFieldContainer.attribute("id", "textContainer"+position);
      // this.textFieldT.parent("#textContainer"+position);
      this.textFieldT.attribute("id", "textInput"+position);
      // this.textI.parent("#textInput"+position);
      this.textFieldV.attribute("id", "textVertical"+position);
      // this.textV.parent("#textVertical"+position);
      this.textFieldO.attribute("id", "textOrizzontal"+position);
      // this.textO.parent("#textOrizzontal"+position);
      this.textFieldS.attribute("id", "sizeText"+position);
      // this.textS.parent("#sizeText"+position);
      this.textFieldC.attribute("id", "textColor"+position);
      // this.textC.parent("#textColor"+position);
    }
  }
}
