class Virus{
    constructor(body,startX,startY){
        this.image = loadImage("Images/Virus.png");

        this.virus = createSprite(body.x + startX,body.y + startY,50,50);
        this.virus.addImage(this.image);
        this.virus.scale  = 0.01;
        //this.virus.tint = "green";

        //this.location = Math.round(random(1))
    }

    increaseSize(increaseValue){
        if(this.virus.scale > 0.03){

        }else{
            this.virus.scale = this.virus.scale + increaseValue;
        }
    }
}