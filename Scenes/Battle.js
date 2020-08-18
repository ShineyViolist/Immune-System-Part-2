class Battle{
    constructor(cellType){
        this.playerImage = loadImage(cellType + ".png");
        this.panel = createSprite(displayWidth/2,(displayHeight - 200)/2,500,400);
        this.player = createSprite(displayWidth/2,(displayHeight - 200)/2,50,50);
        this.player.addImage(this.playerImage);
        console.log("work");
    }
}