document.addEventListener('mousemove', (event) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 3000); // trail disappears after 500 milliseconds
});
