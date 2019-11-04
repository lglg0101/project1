class Controls {
    constructor(game) {
        this.game = game;
        this.player = game.player
        this.moveX = this.player.moveX;
        this.moveY = this.player.moveY;
        this.vX = game.player.vX
    
    }
moveRight() {
    this.game.player.playerX +=  this.moveX;
}
moveLeft() {
    this.game.player.playerX -= this.moveX;
}

movePlayer() {
window.addEventListener("keydown", event => { //does the name of the event matter?
    event.preventDefault();
    switch (event.keyCode) {
      case 37:
        this.moveLeft(); 
        // this.player.drawPlayer();
        break;
      case 39:
        this.moveRight();
        // this.player.drawPlayer();
           [[]]
        break;
    }
  });
}
}

