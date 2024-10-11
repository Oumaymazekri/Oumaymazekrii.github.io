document.addEventListener('scroll', function() {
    const image = document.querySelector('.image-container img');
    let scrollPosition = window.scrollY;
    
    // Appliquer un effet de décalage à l'image lors du défilement
    image.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
});
