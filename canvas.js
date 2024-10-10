import Bullet from "./Bullet";
import Player from "./Player";
import { generateWord, updateLife, updateScore } from "./utility/gameLogics";
import generateEnemy from "./utility/generateEnemy";
import handleCollision from "./utility/handleCollision";

export let score = { value: 0 };
export let life = { value: 1 };
export let running = { value: true };
export let isGameStart = { value: false };

export let ctx;

function checkBeyoundScreen(enemy) {
  return enemy.x < 0 || enemy.x > innerWidth || enemy.y < 0 || enemy.y > innerHeight;
}

export default function setupCanvas(canvas) {
  // const ctx = canvas.getContext('2d');
  ctx = canvas.getContext('2d');
  let player = new Player(Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2), 5);
  let bullets = [];
  let visited = [];
  let enemies = [];
  let timerSpeed = 1000;
  let timer;
  let wordElement = document.getElementById('word');
  let wordInput = document.getElementById('word-input');
  const popAudio = new Audio("assets/sounds/pop.mp3");
  const damageAudio = new Audio("assets/sounds/damage.mp3");
  const gameOverAudio = new Audio("assets/sounds/game-over.mp3");
  const fireAudio = new Audio("assets/sounds/pop.wav");
  const buttonClickSound = new Audio("assets/sounds/button-click.wav");

  // document.querySelector('.introduction-modal').addEventListener('click', function () {
  //     this.classList.add('hide');
  //     setTimeout(() => {
  //         this.remove();
  //     }, 500)
  // })

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      if (buttonClickSound)
        buttonClickSound.play();
    });
  })

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => { generateEnemy(enemies, player, visited); }, timerSpeed);
  }

  function clearTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function initialRun() {
    score.value = 0;
    life.value = 5;
    running.value = true;
    updateScore(score);
    updateLife(life);
    bullets.length = 0;
    visited.length = 0;
    enemies.length = 0;
    startTimer();

    document.querySelectorAll('.hide').forEach(e => { e.classList.remove('hide') })
  }
  initialRun();

  function idk() {
    document.querySelectorAll('.fade-out').forEach(e => { e.classList.add('hide'); })
    setTimeout(() => {
      document.querySelectorAll('.fade-out').forEach(e => {
        e.style.display = 'none';
      })
    }, 500)

    setTimeout(() => {
      document.querySelector('.word-panel').style.display = "block";
      document.getElementById('word-input').focus();

      isGameStart.value = true;
      running.value = true;
      initialRun();
      render();

      setTimeout(() => { document.querySelector('#word-first-try').style.display = "none"; }, 3000)
    }, 1000)
  }

  document.getElementById('home-button').addEventListener('click', e => {
    initialRun();
    clearTimer();
    isGameStart.value = false;
    document.querySelectorAll('.fade-out').forEach(e => {
      e.classList.remove('hide');
    })

    document.querySelectorAll('.fade-out').forEach(e => {
      e.classList.remove('hide');
      e.style.display = 'block';
    })

    document.querySelector('.word-panel').style.display = "none";

    document.querySelector('#game-over-modal').classList.add('fade-out');
    document.querySelector('#game-over-modal').classList.add('hide');
    setTimeout(() => {
      document.querySelector('#game-over-modal').style.display = 'none';
      render();
    }, 500)
  })
  document.getElementById('replay-button').addEventListener("click", () => {
    document.querySelector('#game-over-modal').classList.add('fade-out');
    document.querySelector('#game-over-modal').classList.add('hide');
    setTimeout(() => {
      document.querySelector('#game-over-modal').style.display = 'none';
      render();
    }, 500)
    idk();
  })

  document.getElementById('play-now')?.addEventListener("click", () => {
    idk();
  })

  function render() {
    if (running.value) {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      console.log('canvas is running');

      player.draw(ctx);
      bullets.forEach(bullet => {
        bullet.draw(ctx);
      })

      enemies.forEach((enemy, enemyIdx) => {
        enemy.draw(ctx);

        if (isGameStart.value &&
          visited[enemyIdx] == -1 &&
          wordElement.innerText.toLowerCase() == wordInput.value.trim().toLowerCase()) {
          if (fireAudio)
            fireAudio.play();
          bullets.push(new Bullet(player.x, player.y, 3, 1, enemy));
          visited[enemyIdx] = 1;
          wordInput.value = '';
          wordInput.focus();
          wordElement.innerHTML = '';
          wordElement.innerHTML = generateWord();
        }

        bullets.forEach((bullet, bulletIdx) => {
          if (handleCollision(bullet, enemy)) {
            popAudio.play();
            enemies.splice(enemyIdx, 1);
            visited.splice(enemyIdx, 1);
            bullets.splice(bulletIdx, 1);
            score.value += 10;
            updateScore(score);
          }
        })

        // removes enemies beyound screen
        if (checkBeyoundScreen(enemy)) {
          enemies.splice(enemyIdx, 1);
          visited.splice(enemyIdx, 1);
        }

        // stops animation if enemy touch player 
        if (isGameStart.value) {
          if (handleCollision(player, enemy)) {
            damageAudio.play();
            life.value--;
            enemies.splice(enemyIdx, 1);
            if (life.value == 0) {
              gameOverAudio.play();
              document.getElementById('total-score').innerHTML = "Total Score : " + score.value;
              document.getElementById('game-over-modal').style.display = 'block';
              clearInterval(timer);
              running.value = false;
            }
            updateLife(life);
          }
        }
      })

      requestAnimationFrame(render);
    }
  }
  render();
}