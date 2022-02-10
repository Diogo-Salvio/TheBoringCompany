const botao = document.querySelector('#button__arrow')

botao.addEventListener('click', () => {
    window.scroll({ top: window.innerHeight, behavior: "smooth"})
})