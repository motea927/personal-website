var btn = document.getElementById('js__nav__btn');
var list = document.getElementById('js__list');
var btnbg = document.getElementById('js__btnbgimg');
var header__link = document.getElementsByClassName('header__link');
    console.log(btnbg.getAttribute('xlink:href'));
window.onresize = () => {
    var width = document.body.scrollWidth + 17;
    console.log(width);
    if (width > 660) {
        list.style.display = 'grid';
    } else {
        list.style.display = 'none';
    }
    
};

var openNav = () => {
    list.style.display = 'grid';
    btnbg.setAttribute('xlink:href', '../img/sprites.svg#close');
};

var closeNav = () => {
    list.style.display = 'none';
    btnbg.setAttribute('xlink:href', '../img/sprites.svg#menu');
}

for ( let i=0;i<header__link.length;i++) {
    var link = header__link[i];
    
    link.addEventListener('click', () => {
        if (document.body.scrollWidth + 17 <= 660) {
            closeNav();
        }
        
    });
}

btn.addEventListener('click', () => {

    if (list.style.display === 'grid') {
        closeNav();
    } else {
        openNav();
    }
});