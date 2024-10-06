export default class Bullet {
    constructor(x, y, radii, speed, enemy) {
        this.x = x;
        this.y = y;
        this.radii = radii;
        this.speed = speed;
        this.enemy = enemy;

        const dx = this.enemy.x - this.x;
        const dy = this.enemy.y - this.y;
        const angle = Math.atan2(dy, dx);

        this.cosX = Math.cos(angle) * this.speed;
        this.sinY = Math.sin(angle) * this.speed;
    }

    draw(ctx) {
        this.move();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radii, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

    move() {
        this.x += this.cosX;
        this.y += this.sinY;
    }
}