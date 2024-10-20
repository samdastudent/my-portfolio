const filterButtonsProject = document.querySelectorAll('.filter__btn span');
const projectCard = document.querySelectorAll('.project__card');

filterButtonsProject.forEach(button => {
    button.addEventListener('click', () => {
        filterButtonsProject.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
        const filterValue = button.getAttribute('data-project');

        projectCard.forEach(card => {
            if (filterValue === 'allproject' || card.getAttribute('data-category') === filterValue) {
                card.style.visibility = 'visible';
                card.style.position = 'relative';
                card.style.opacity = '1';
            } else {
                card.style.visibility = 'hidden';
                card.style.position = 'absolute';
                card.style.opacity = '0';
            }
        });
    });
});
