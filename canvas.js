import Bullet from "./Bullet";
import Player from "./player";
import { handlePlayNowButtonClick, updateLife, updateScore } from "./utility/gameLogics";
import generateEnemy from "./utility/generateEnemy";
import handleCollision from "./utility/handleCollision";
import isThreshold from "./utility/isThreshold";

let score = 0;
let life = 5;

function getScore() { return score; }
function getLife() { return life; }

export default function setupCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let player = new Player(Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2), 5);
    let bullets = [];
    let visited = [];
    let enemies = [];
    let running = true;
    let timerSpeed = 500;
    let timerDecrement = 50;
    let timer;

    function initialRun() {
        updateScore(getScore());
        updateLife(getLife());
        handlePlayNowButtonClick();
    }
    initialRun();

    const temp = () => {
        generateEnemy(enemies, player, visited);
        if (timerSpeed <= 400)
            generateEnemy(enemies, player, visited);
        if (timerSpeed <= 100)
            generateEnemy(enemies, player, visited);
        // timerSpeed -= timerDecrement;
        clearInterval(timer);
        timer = setInterval(temp, timerSpeed);
    }

    timer = setInterval(temp, timerSpeed);
    const render = () => {
        if (running) {
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            player.draw(ctx);
            bullets.forEach(bullet => {
                bullet.draw(ctx);
            })

            enemies.forEach((enemy, enemyIdx) => {
                enemy.draw(ctx);

                if (isThreshold(enemy, 500)) {
                    // if (isClosetEnemyToPlayer(enemy, player)) {
                    if (visited[enemyIdx] == -1) {
                        bullets.push(new Bullet(player.x, player.y, 3, 1, enemy));
                        visited[enemyIdx] = 1;
                    }
                    // }
                }

                bullets.forEach((bullet, bulletIdx) => {
                    if (handleCollision(bullet, enemy)) {
                        enemies.splice(enemyIdx, 1);
                        visited.splice(enemyIdx, 1);
                        bullets.splice(bulletIdx, 1);
                    }
                })
                // }

                if (checkBeyoundScreen(enemy)) {
                    enemies.splice(enemyIdx, 1);
                    visited.splice(enemyIdx, 1);
                }

                // stops animation if enemy touch player 
                if (handleCollision(player, enemy)) {
                    running = false;
                    clearInterval(timer);
                }
            })

            requestAnimationFrame(render);
        }
    }
    render();
}

function checkBeyoundScreen(enemy) {
    return enemy.x < 0 || enemy.x > innerWidth || enemy.y < 0 || enemy.y > innerHeight;
}

function isClosetEnemyToPlayer(enemy, player) {
    const distance = Math.sqrt(Math.pow(enemy.x - player.x, 2) + Math.pow(enemy.y - player.y, 2));
    return distance < 200;
}
