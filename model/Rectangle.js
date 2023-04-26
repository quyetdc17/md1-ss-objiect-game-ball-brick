class Rectangle {
    x;
    y;
    width;
    height;
    color;
    status;


    constructor(x, y, width, height, color, status) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.status = status;
    }

    drawRect(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

    moveLeft() {
        this.x -= 40;
    }
    moveRight() {
        this.x += 40;
    }
}