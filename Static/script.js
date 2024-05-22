// script.js
const balloons = document.querySelectorAll('.balloon');

balloons.forEach((balloon, index) => {
    balloon.style.animationDelay = `${index * 0.5}s`;
});

