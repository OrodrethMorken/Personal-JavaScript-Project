class BackgroundTemplate {
  constructor() {
    //GUI
    this.guiContainer = createDiv("").parent("#gui");
    this.guiContainer.attribute("id","options");
    //INFO
    this.infoContainer = createDiv("").parent("#info");
    this.infoContainer.attribute("id","infoContainer");
  }

  clear(){
    this.guiContainer.remove();
    this.infoContainer.remove();
  }
}
