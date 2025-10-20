document.addEventListener('mousemove', (e) => { 
    
    console.log(e)

    const mouseX = e.clientX; // logs client x movement
    const mouseY = e.clientY; // logs client y movement

    const anchor = document.querySelector('.character-container'); // choses the base so we can anchor a point on the website
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const eyes = document.querySelectorAll('.eye') // choses the eyes to move later on

    const mousePercentX = (mouseX - anchorX) / (rekt.width / 2); //this is a percentage of the position of eyes i think
    const mousePercentY = (mouseY - anchorY) / (rekt.height / 2);

    const maxMove = 10; //  pixels 
    const moveX = mousePercentX * maxMove; // this will do the percentage of the mouse position times 10 so we get a small motion for eyes
    const moveY = mousePercentY * maxMove; // this will do the percentage of the mouse position times 10 so we get a small motion for eyes

    eyes.forEach(eye => { // update eyes movement to the current position
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`; // this makes the translation movement aka eyes be moving
    });
});