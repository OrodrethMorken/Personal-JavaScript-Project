class TextBox {

  constructor(index) {
    this.index = index;
    this.visibility = true;
    this.textFieldContainer = createElement("div").parent("#textContainer");
    this.textFieldContainer.attribute("class", "textBoxH");
    this.textFieldContainer.attribute("id", "textContainer"+index);
    this.textFieldT = createElement("li", "Testo▼").parent("#textContainer"+index);
    this.textFieldT.attribute("id", "textInput"+index);
    this.textFieldT.mousePressed(function(){
      return textArray[this.id().slice(9).valueOf()].toggle()});
    this.textFieldView = createElement("div").parent("#textContainer"+index);
    this.textFieldView.attribute("id", "textFieldView"+index);
    this.textI = createInput("").parent("#textFieldView"+index);
    this.textFieldV = createElement("li", "Posizione Verticale Testo").parent("#textFieldView"+index);
    this.textFieldV.attribute("id", "textVertical"+index);
    this.textV = createSlider(0, height, height/2, 10).parent("#textVertical"+index);
    this.textFieldO = createElement("li", "Posizione Orizzontale Testo").parent("#textFieldView"+index);
    this.textFieldO.attribute("id", "textOrizzontal"+index);
    this.textO = createSlider(0, width, width/2, 10).parent("#textOrizzontal"+index);
    this.textFieldS = createElement("li", "Grandezza Testo").parent("#textFieldView"+index);
    this.textFieldS.attribute("id", "sizeText"+index);
    this.textS = createSlider(10, width, 100, 10).parent("#sizeText"+index);
    this.textFieldC = createElement("li", "Colore Testo").parent("#textFieldView"+index);
    this.textFieldC.attribute("id", "textColor"+index);
    this.textC = createColorPicker(color(400)).parent("#textColor"+index);
    this.textI.input(loop);
    this.textV.input(loop);
    this.textO.input(loop);
    this.textS.input(loop);
    this.textC.input(loop);
  }

  toggle(){
    let text;
    if(this.visibility){
      this.visibility = false;
      this.textFieldView.hide();
      text = this.textFieldT.elt.innerHTML.replace("▼","▲");
    }
    else {
      this.visibility = true;
      this.textFieldView.show();
      text = this.textFieldT.elt.innerText.replace("▲","▼");
    }
    this.textFieldT.elt.innerText = text;
  }

  updateindex(index){
    if(this.index != index){
      this.index = index;
      this.textFieldContainer.attribute("id", "textContainer"+index);
      this.textFieldView.attribute("id", "textFieldView"+index);
      this.textFieldT.attribute("id", "textInput"+index);
      this.textFieldV.attribute("id", "textVertical"+index);
      this.textFieldO.attribute("id", "textOrizzontal"+index);
      this.textFieldS.attribute("id", "sizeText"+index);
      this.textFieldC.attribute("id", "textColor"+index);
    }
  }
}
