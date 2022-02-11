const btnmenu = document.querySelector('.nav__menu');


function toggleMenu() {
        const nav =document.querySelector('#nav__menu__itens');
        nav.classList.toggle('active');
        btnmenu.classList.toggle('active')
}


btnmenu.addEventListener('click', toggleMenu);












/*class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector('.nav__menu');
        this.navList = document.querySelector('#nav__menu__itens');
        this.navLinks = document.querySelector('#nav__menu__itens a');
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".nav__menu",
    "#nav__menu__itens",
    "#nav__menu__itens a",
);

mobileNavbar.init();*/