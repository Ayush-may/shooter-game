export default function handleCollision(bullet, enemy) {
    const dx = bullet.x - enemy.x;
    const dy = bullet.y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= (bullet.radii + enemy.radii)
}