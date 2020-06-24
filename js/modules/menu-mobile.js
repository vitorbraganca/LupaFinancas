import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

    if(menuButton) {
        console.log('OK')
        function openMenu(event) {
            menuList.classList.add('active');
            menuButton.classList.add('active');
            outsideClick(menuList, eventos, () => {
                console.log('Toggle')
                menuList.classList.remove('active');
                menuButton.classList.remove('active');
            })
        }
        eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
    }
}