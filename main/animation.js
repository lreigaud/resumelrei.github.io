document.addEventListener('mousemove', (e) => { 
    
    console.log(e)

    const mouseX = e.clientX; // logs client x movement
    const mouseY = e.clientY; // logs client y movement

    const anchor = document.querySelector('.character-container'); // choses the base so we can anchor a point on the website
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const eyes = document.querySelectorAll('.eye') // choses the eyes to move later on

    const mousePercentX = (mouseX - anchorX) / (rekt.width / 2);
    const mousePercentY = (mouseY - anchorY) / (rekt.height / 2);

    const maxMove = 10; //  pixels 
    const moveX = mousePercentX * maxMove; // we get the x mouse mov
    const moveY = mousePercentY * maxMove; // we get the y mouse mov

    eyes.forEach(eye => {
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`; // this makes the translation movement aka eyes be moving
    });
});