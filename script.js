const naoButton = document.getElementById("nao");

naoButton.addEventListener("mouseover", () => {
    const buttonWidth = naoButton.offsetWidth;
    const buttonHeight = naoButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    naoButton.style.position = 'absolute';
    naoButton.style.left = `${x}px`;
    naoButton.style.top = `${y}px`;
});
