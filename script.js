let stars = [];

document.addEventListener('mousemove', (event) => {
    const star = document.createElement('div');
    star.className = 'trail';
    star.style.left = `${event.pageX}px`;
    star.style.top = `${event.pageY}px`;
    star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewport="0 0 24 24" style="fill:black;"><path d="M12 .587l3.668 7.425 8.332 1.212-6.001 5.85 1.416 8.26L12 18.896l-7.415 3.938 1.416-8.26-6.001-5.85 8.332-1.212z"/></svg>`;
    document.body.appendChild(star);
    stars.push(star);

    if (stars.length > 5) { // Adjust the number of stars in the trail
        let oldStar = stars.shift();
        oldStar.remove();
    }

    setTimeout(() => {
        star.remove();
        stars = stars.filter(item => item !== star);
    }, 3000); // Stars disappear after 1 second
});
