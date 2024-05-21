

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#btn');
    const menu = document.querySelector('.header__menu');

    btn.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
    });
});

const btnMoon = document.querySelector('#btn-moon');
const body = document.body

btnMoon.addEventListener('click', function(){
    body.classList.toggle('dark-theme')
})

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.popular-foods__card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'active' class from all cards
            cards.forEach(c => c.classList.remove('active-card'));
            
            // Add 'active' class to the clicked card
            card.classList.add('active-card');
        });
    });
});

const contContainer = document.getElementsByClassName('content-container');

for(let i = 0; i < contContainer.length; i++){
    contContainer[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}