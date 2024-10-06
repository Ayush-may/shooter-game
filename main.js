import './style.css'
import setupCanvas from './canvas'

document.querySelector('#app').innerHTML = `
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
            <div class="life" style="display:flex; ">
                <p style="margin-right:10px">Life : </p>
                <div id="lives"></div>
            </div>
        </div >
    
    <canvas id="canvas" width="${window.innerWidth}" height="${window.innerHeight}" />
`
setupCanvas(document.querySelector('#canvas'))

// < p id = "word-name" style = "font-size:3rem;" > M</p >
//     <input type="text" style="background:transparent; border:1px solid black;outline:none;text-align:center;font-size: 20px;width:100px" />