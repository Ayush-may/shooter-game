import './style.css'
import setupCanvas from './canvas'

document.querySelector('#app').innerHTML = `
    <div class="introduction-modal">
        <h3>Introduction.</h3>
        <p>The game was designed and developed by Ayush Sharma, a final-year student(2021-2025).</p>    
        <h4 style="display:inline;">Follow me on!</h4>
        <a href="https://github.com/ayush-may/" target="_blank">Github</a> ,
        <a href="https://www.linkedin.com/in/ayush14may/" target="_blank">LinkedIn</a>
        <hr>
        <h5 style="display:block;font-weight:normal;">Please create an issue on GitHub if you would like to propose a new feature or suggest any improvements.</h5>
        <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="modal fade-out">
        <h3>Introduction.</h3>
        <p>The game was designed and developed by Ayush Sharma, a final-year student(2021-2025).</p>    
        <h4 style="display:inline;">Follow me on!</h4>
        <a href="https://github.com/ayush-may/" target="_blank">Github</a> ,
        <a href="https://www.linkedin.com/in/ayush14may/" target="_blank">LinkedIn</a>
        <h3>How to play ?</h3>
            <ol>
                <li>You are positioned as the player at the center of the screen.</li>
                <li>A character will be presented to you, and your task is to type that character.</li>
                <li>If the correct character is entered, your character will fire a bullet at the nearest enemy. However, if an incorrect character is typed, you will take damage.</li>
            </ol>
            <button type="button" id="play-now" >Play Now</button>
        </div>

            <div class="game-name-panel fade-out">
                <p style="font-size:3rem;font-weight:bold;text-align:center">Enemy Shooter Game!</p>    
            </div>

        <div class="game-panel">
            <p id="score">score: <p>
            <div class="life" style="display:flex">
                <p style="margin-right:10px;">Life : </p>
                <div id="lives" ></div>
            </div>
        </div >
    
        <div class="word-panel">
            <p id="word-first-try">Please type the word provided</p>
            <p id="word">WORD</p>
            <input type="text" id="word-input" autocomplete="off" >
        </div>
        <div id="game-over-modal" class="">
            <h1 style="text-align:center;color:black">GAME OVER!</h1>
            <p id="total-score" style="text-align:center;color:black">Total Score : 100</p>
            <button place="home" id="home-button">Home</button>
            <button place="replay" id="replay-button">replay?</button>
        </div>
    <canvas id="canvas" width="${window.innerWidth}" height="${window.innerHeight}" />
`
setupCanvas(document.querySelector('#canvas'))