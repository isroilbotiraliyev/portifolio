var menu = document.querySelector('.menu');
var navList = document.querySelector('.nav__list');

menu.addEventListener('click', function () {
    navList.classList.toggle('active')
    menu.classList.toggle('active')
})

var typed = document.querySelector('.header__text');
    
let txt = typed.innerHTML
typed.innerHTML = ""
    console.log(txt);
function str(x = 0) {
    typed.innerHTML += txt[x]
    x++
    if (txt.length > x) {
        setTimeout(() => {
            str(x)
        }, 90);
    }
    

}
str()