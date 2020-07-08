// const arrow = document.querySelector('.arrow');
// const on = document.querySelectorAll('.on');

// arrow.addEventListener('click', function () {
//     for (let i = 0; i < on.length; i++) {
//         on[i].classList.toggle('on')
//     }
// })

const arrow = document.querySelector('.arrow');
const menu = document.querySelector('nav');

arrow.addEventListener('click', function () {
    arrow.classList.toggle('on');
    menu.classList.toggle('on')
})