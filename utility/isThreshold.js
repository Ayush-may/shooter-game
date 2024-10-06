export default function isThreshold(enemy, threshold = 200) {
    const dx1 = (innerWidth / 2) - enemy.x;
    const dy1 = (innerHeight / 2) - enemy.y;
    const distance = Math.sqrt(dx1 * dx1 + dy1 * dy1);

    return distance <= threshold;
}