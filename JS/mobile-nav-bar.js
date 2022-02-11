const btnmenu = document.querySelector('.nav__menu');


function toggleMenu() {
        const nav =document.querySelector('#nav__menu__itens');
        nav.classList.toggle('active');
        btnmenu.classList.toggle('active')
}


btnmenu.addEventListener('click', toggleMenu);












