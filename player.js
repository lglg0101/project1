class Player {
    constructor(game) {
        this.game = game;
        this.playerX = 350;
        this.playerY = 0;
        this.width = game.height;
        this.height = game.width;
        // this.vx = 5;
        // this.vy = 2;
        this.gravity = 0;
        this.gravitySpeed = 0;
        this.moveX = 10;
        this.moveY = 10;

        //Baby
        this.playerImage = new Image();
        this.playerImage.src = 'images/character.png'

        // //Frog
        // this.playerImage2 = new Image();
        // this.playerImage2.src = 'images/character2.png'
    }

    drawPlayer() {
        context.drawImage(this.playerImage, this.playerX, this.playerY, 40, 40);
        // context.drawImage(this.playerImage2, 50, 440, 40, 40);

    }
} 
