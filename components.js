class Components {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
    }
  
update() {
      let context = game.context;
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }