

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

const cards = document.querySelectorAll('.popular-foods__card')

cards.forEach(card => {
    card.addEventListener('click',function(){
        cards.forEach(c => c.classList.remove('active-card'))
        card.classList.add('active-card')
    })
})