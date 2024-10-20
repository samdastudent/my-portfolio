const nav = document.querySelector('.main-nav');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.main-nav li'); // Use querySelectorAll to select all nav links
const navIcon = document.querySelector('.nav-icon');

navIcon.addEventListener('click', () => {
    const isActive = nav.classList.toggle('active');

    if (isActive) {
        body.classList.add('no-scroll');
        navIcon.classList.toggle('active');
    } else {
        body.classList.remove('no-scroll');
        navIcon.classList.remove('active');
    }
});

// Mobile Device - Close the menu and remove 'no-scroll' when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navIcon.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

const buttons = document.querySelectorAll('.widget__etc span');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => { btn.classList.remove('active'); })
        button.classList.add('active');
    });
});