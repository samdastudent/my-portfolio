const filterButtons = document.querySelectorAll('.widget__etc span');
const blogCards = document.querySelectorAll('.blog__card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => { btn.classList.remove('active') });

        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        blogCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.visibility = 'visible';
                card.style.position = 'relative';
                card.style.opacity = '1';
            } else {
                card.style.visibility = 'hidden';
                card.style.position = 'absolute';
                card.style.opacity = '0';
            }
        })
    });
});