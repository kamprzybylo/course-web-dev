let rotate = 0;
const deg = 10;

const div = document.querySelector('div');
const btn = document.querySelector('button');

// div.style.transition = "0.5s"


btn.addEventListener("click", function () {

    rotate += deg; // to samo co to: rotate = rotate + deg;
    div.style.transform = "rotate(" + rotate + "deg)";
    // dodanie klasy:
    div.classList.add("animation");
})