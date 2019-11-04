class Troll { 
    constructor(game) { 
        this.game = game;
        this.height = game.height;
        this.width = game.width; 
        this.trollX = Math.floor((Math.random() * this.width-15) + 15); 
        this.trollY = Math.floor((Math.random() * this.height-15) + 15); 
        this.trollImage = new Image(); 
        this.bottleImage = "images/trollface.png";
    }
    drawTroll () { 
        context.drawImage(this.trollImage, this.trollX, this.trollY, 40, 40);
    }
}
