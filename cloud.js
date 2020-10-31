class Cloud extends BackgroundTemplate{
  constructor() {
    super();
    colorMode(RGB,255);

    this.noiseScale = 0.0075;
    this.xoff = random(100000);
    this.yoff = random(100000);
    this.textFieldUL = createElement("li", "Primo Colore").parent("#options");
    this.textFieldUL.attribute("id", "color1");
    this.textFieldUR = createElement("li", "Secondo Colore").parent("#options");
    this.textFieldUR.attribute("id", "color2");
    this.c1 = createColorPicker(color(252, 240, 3)).parent("#color1");
    this.c1.input(function(){return sfondo.createBackground(sfondo)});
    this.c2 = createColorPicker(color(0, 0, 0)).parent("#color2");
    this.c2.input(function(){return sfondo.createBackground(sfondo)});
    this.clearButton = createButton("Genera nuova nuvola").parent("#options");
    this.clearButton.mousePressed(function(){
      sfondo.xoff = random(100000);
      sfondo.yoff = random(100000);
      sfondo.createBackground(sfondo);
      return noiseSeed(random(100000));
    });
    this.infoTextD = createElement("li", "tempo Visualizzazione immagine: ").parent("#infoContainer");
    this.infoTextD.attribute("id", "infoD")
    this.infoD = createElement("li", "").parent("#infoD");

    this.grafic = createGraphics(width,height);
    this.createBackground(this);
  }

  createBackground(sfondo){
    sfondo.grafic.background(0);
    for(let i = 0; i < width; i+=3){
      for(let j = 0; j < height; j+=3){
        let noiseVal = noise((i+sfondo.xoff)*sfondo.noiseScale, (j+sfondo.yoff)*sfondo.noiseScale);
        let colorf = lerpColor(sfondo.c1.color(), sfondo.c2.color(), noiseVal);
        sfondo.grafic.stroke(colorf);
        sfondo.grafic.strokeWeight(6);
        sfondo.grafic.point(i,j);
      }
    }
    loop();
  }

  draw(){
    let timeStart = millis();
    image(this.grafic,0,0);
    let timeEnd = millis();
    let totalTime = timeEnd-timeStart;
    this.infoD.elt.innerText = (totalTime/1000).toString()+"s";
    noLoop();
  }
}
