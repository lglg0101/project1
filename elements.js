class Troll { 
    constructor(game, trollX, trollY) { 
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

// class VideoIcon { 
//     constructor(game) { 
//         this.game = game;
//         this.height = game.height;
//         this.width = game.width; 
//         this.videoIconX = Math.floor((Math.random() * this.width-15) + 15); 
//         this.videoIconY = Math.floor((Math.random() * this.height-15) + 15); 
//         this.videoImage = new Image(); 
//         this.videoImage = "images/red.jpg";
//     } 
//     drawVideoImage () { 
//         context.drawImage(this.videoImage, this.videoIconX, this.videoIconY, 40, 40);
//     }