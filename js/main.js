const toggleBtn = document.querySelector('#toggle-btn'),
    navBar = document.querySelector('#nav-bar'),
    overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    // Change the image source based on the current state
    const img = toggleBtn.querySelector('img');
    const isNavBarActive = navBar.classList.contains('active');

    if (isNavBarActive) {
        img.src = 'images/icon-close.svg';
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    } else {
        img.src = 'images/icon-hamburger.svg';
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
    }
})