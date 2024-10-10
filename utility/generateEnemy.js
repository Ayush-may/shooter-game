import Enemy from "../Enemy";

export default function generateEnemy(enemies, player, visited) {
    const val = Math.round(Math.random() * 4);
    let x, y, radii, speed = 2;
    radii = generateRadii(5, 5);
    speed = 0.5;

    switch (val) {
        case 1:
            visited.push(-1);
            x = 0;
            y = Math.round(Math.random() * innerHeight);
            enemies.push(new Enemy(x, y, radii, speed, player));
            break;
        case 2:
            visited.push(-1);
            x = Math.round(Math.random() * innerWidth);
            y = 0;
            enemies.push(new Enemy(x, y, radii, speed, player));
            break;
        case 3:
            visited.push(-1);
            x = innerWidth;
            y = Math.round(Math.random() * innerHeight);
            enemies.push(new Enemy(x, y, radii, speed, player));
            break;
        case 4:
            visited.push(-1);
            x = Math.round(Math.random() * innerWidth);
            y = innerHeight;
            enemies.push(new Enemy(x, y, radii, speed, player));
            break;
    }
}


function generateRadii(min, max) {
    let num = Math.round(Math.random() * max);

    do {
        num = Math.round(Math.random() * max);
    } while (num < min);

    return num;
}

function generateSpeed(min, max) {
    let num = Math.round(Math.random() * max);

    do {
        num = Math.round(Math.random() * max);
    } while (num < min);

    return num;
}