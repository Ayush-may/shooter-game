export function updateScore(score) {
    document.getElementById("score").innerHTML = "score : " + score;
}

export function updateLife(life) {
    const src = "https://clipart-library.com/images/pcq64dRc9.png";
    const livesElement = document.getElementById("lives");
    livesElement.innerHTML = "";

    for (let i = 0; i < life; i++) {
        const img = document.createElement("img");
        img.src = src;
        img.width = 20;
        img.height = 20;
        livesElement.appendChild(img);
    }
}

export function handlePlayNowButtonClick() {
    document.getElementById('play-now')?.addEventListener("click", () => {
        document.querySelectorAll('.fade-out').forEach(e => {
            e.classList.add('hide');
        })

        setTimeout(() => {
            document.querySelectorAll('.fade-out').forEach(e => {
                e.classList.add('hide');
            })
        }, 500)
    })
}