export default class Enemy {
    constructor(x, y, radii, speed, player) {
        this.x = x;
        this.y = y;
        this.radii = radii;
        this.speed = speed;
        this.player = player;
        this.life = radii;

        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const angle = Math.atan2(dy, dx);

        this.cosX = Math.cos(angle) * this.speed;
        this.sinY = Math.sin(angle) * this.speed;
    }

    draw(ctx) {
        this.move();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radii, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }

    move() {
        this.x += this.cosX;
        this.y += this.sinY;
    }
}