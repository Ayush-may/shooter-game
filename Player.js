export default class Player {
    constructor(x, y, radii) {
        this.x = x;
        this.y = y;
        this.radii = radii;
    }

    draw(ctx) {
        // circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radii, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();

        const lineLength = 10;

        // line
        // ctx.beginPath();
        // ctx.moveTo(this.x, this.y);
        // ctx.lineTo(this.x + lineLength * cosX, this.y + lineLength * sinY);
        // ctx.lineTo(this.x + lineLength, this.y + lineLength);
        // ctx.stroke();
        // ctx.closePath();
    }
}