class TextBox {

  constructor(index) {
    this.index = index;
    this.visibility = true;
    this.textFieldContainer = createElement("div").parent("#textContainer");
    this.textFieldContainer.attribute("class", "textBoxH");
    this.textFieldContainer.attribute("id", "textContainer"+index);
    this.textFieldT = createElement("li", "Testo▼").parent("#textContainer"+index);
    this.textFieldT.mousePressed(function(){
      return textArray[this.id().slice(9).valueOf()].toggle()});
    this.textFieldView = createElement("div").parent("#textContainer"+index);
    this.textFieldView.attribute("id", "textFieldView"+index);
    this.textI = createInput("").parent("#textFieldView"+index);
    this.textI.attribute("id", "textInput"+index);
    this.textFieldV = createElement("li", "Posizione Verticale Testo").parent("#textFieldView"+index);
    this.textFieldV.attribute("id", "textVertical"+index);
    this.textV = createSlider(0, height, height/2, 10).parent("#textVertical"+index);
    this.textV.attribute("id","textY"+index);
    this.textFieldO = createElement("li", "Posizione Orizzontale Testo").parent("#textFieldView"+index);
    this.textFieldO.attribute("id", "textOrizzontal"+index);
    this.textO = createSlider(0, width, width/2, 10).parent("#textOrizzontal"+index);
    this.textO.attribute("id","textX"+index);
    this.textFieldS = createElement("li", "Grandezza Testo").parent("#textFieldView"+index);
    this.textFieldS.attribute("id", "sizeText"+index);
    this.textS = createSlider(10, width, 50, 10).parent("#sizeText"+index);
    this.textS.attribute("id", "textSize"+index);
    this.textFieldC = createElement("li", "Colore Testo").parent("#textFieldView"+index);
    this.textFieldC.attribute("id", "textColor"+index);
    this.textC = createColorPicker(color(400)).parent("#textColor"+index);
    this.textI.input(function(){
      return textArray[this.id().slice(9).valueOf()].update()});
    this.textV.input(loop);
    this.textO.input(loop);
    this.textS.input(function(){
      return textArray[this.id().slice(8).valueOf()].update()});
    this.textC.input(loop);
    this.update();
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

  update(){
    textSize(this.textS.value());
    this.ta = textAscent();
    this.td = textDescent();
    this.tw = textWidth(this.textI.value());
    loop();
  }

  updateindex(index){
    if(this.index != index){
      this.index = index;
      this.textFieldContainer.attribute("id", "textContainer"+index);
      this.textFieldView.attribute("id", "textFieldView"+index);
      this.textFieldV.attribute("id", "textVertical"+index);
      this.textFieldO.attribute("id", "textOrizzontal"+index);
      this.textFieldS.attribute("id", "sizeText"+index);
      this.textFieldC.attribute("id", "textColor"+index);
      this.textI.attribute("id", "textInput"+index);
      this.textV.attribute("id","textY"+index);
      this.textO.attribute("id","textX"+index);
      this.textS.attribute("id", "textSize"+index);
    }
  }
  //
  // move(){
  //   if(pmouseX > this.textO.value()-(this.tw/2) && pmouseX < this.textO.value()+(this.tw/2)){
  //     if(pmouseY > this.textV.value()-this.ta && pmouseY < this.textV.value()+this.td){
  //       let newY = document.getElementById(this.textV.id());
  //       let newX = document.getElementById(this.textO.id());
  //       newX.value = mouseX;
  //       newY.value = mouseY;
  //     }
  //   }
  // }

  draw(){
    if(selected == SNOWFLAKE) translate(-width/2,-height/2);
    noStroke();
    fill(this.textC.color());
    textSize(this.textS.value());
    textAlign(CENTER);
    text(this.textI.value(), this.textO.value(), this.textV.value());
    // noFill();
    // stroke(400,0,0);
    // rect(this.textO.value()-(this.tw/2), this.textV.value()-this.ta, this.tw, this.ta+this.td);
  }
}
