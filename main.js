import './style.css'
import setupCanvas from './canvas'

document.querySelector('#app').innerHTML = `
    <div class="introduction-modal">
        <h3>Introduction.</h3>
        <p>The game was designed and developed by Ayush Sharma, a final-year student(2021-2025).</p>    
        <h4>Follow me on!</h4>
            <a href="https://github.com/ayush-may/" target="_blank">Github</a> ,
            <a href="https://www.linkedin.com/in/ayush14may/" target="_blank">LinkedIn</a>
        <button>Click to Remove</button>
    </div>
    <div class="modal fade-out">
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
            <p id="word">WORD</p>
            <input type="text" id="word-input" autocompletion="off" >
        </div>
        <div id="game-over-modal">
            <p id="total-score" style="text-align:center;color:black">Total Score : 100</p>
            <button place="home">Home</button>
            <button place="replay">replay?</button>
        </div>
    <canvas id="canvas" width="${window.innerWidth}" height="${window.innerHeight}" />
`
setupCanvas(document.querySelector('#canvas'))

// < p id = "word-name" style = "font-size:3rem;" > M</p >
//     <input type="text" style="background:transparent; border:1px solid black;outline:none;text-align:center;font-size: 20px;width:100px" />