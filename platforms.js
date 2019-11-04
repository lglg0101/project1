class Platforms {
    constructor() { 
        this.platformArr = [];
        this.platformWidth = 100;
        this.platformHeight = 10;
    }

    drawPlatforms(){
        context.fillStyle = "#907020";

	for(var i = 0; i < platforms.length; i++){
		context.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
		context.lineWidth = 5;
		context.strokeStyle = "#90D030";
		context.strokeRect(platforms[i].x, platforms[i].y-2, platforms[i].width, 5);
	}
} 
} 
