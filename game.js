class Game {
    constructor($canvas) {
        this.canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.player = new Player(this);
        this.speed = 1000;

        // this.obstacle = new Obstacle(400, 440);

        this.controls = new Controls(this);
        this.audio = new Audio();
        this.controls.movePlayer();


        //troll image
        this.troll = new Troll(this);


        // this.videoIcon = new VideoIcon (this);

    }

update(time){ 
        this.context.clearRect(0,0,this.context.game.width,this.context.game.height);
}

        drawEverything() {
            this.context.clearRect(0, 0, 700, 500)
            // this.grid.drawGrid();
            this.player.drawPlayer();
            this.troll.drawTroll();
            // this.videoIcon.drawVideoImage();
            this.controls.movePlayer();
            // this.obstacle.drawObstacle();
        }


        startGame() {
            this.drawEverything();
        } 
    }
