import words from "./words";

export function updateScore(score) {
  document.getElementById("score").innerHTML = "score : " + score.value;
}

export function updateLife(life) {
  const src = "https://clipart-library.com/images/pcq64dRc9.png";
  const livesElement = document.getElementById("lives");
  livesElement.innerHTML = "";

  for (let i = 0; i < life.value; i++) {
    const img = document.createElement("img");
    img.src = src;
    img.width = 20;
    img.height = 20;
    livesElement.appendChild(img);
  }
}

export const generateWord = () => {
  let random = Math.round(Math.random() * words.length);
  let word = words[random];
  return word;
}