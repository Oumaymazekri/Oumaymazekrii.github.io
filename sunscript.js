document.addEventListener('scroll', function() {
    const image = document.querySelector('.image-container img');
    let scrollPosition = window.scrollY;
    
    image.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
});
