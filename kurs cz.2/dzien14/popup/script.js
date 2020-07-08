// wersja JQ
// $(".article button").on('click', function () {
//     $('.modal-wrap').addClass('active');
//     $('.article').addClass('blur');
// })

// $('span.hide').on('click', function () {
//     $('.modal-wrap').removeClass('active');
//     $('.article').removeClass('blur');
// })


// wersja skrócona JQ
// $('.article button, span.hide').on('click', function () {
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })

const button = document.querySelector('.article button');
const blur = document.querySelector('.article');
const popup = document.querySelector('.modal-wrap');
const close = document.querySelector('.hide')

button.addEventListener('click', function () {
    popup.classList.add('active');
    blur.classList.add('blur');
})
close.addEventListener('click', function () {
    popup.classList.remove('active');
    blur.classList.remove('blur');
})