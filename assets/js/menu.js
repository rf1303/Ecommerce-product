export function menuOpen(menu,bg) {
    menu.classList.remove("display__none");
    bg.classList.remove('display__none');
}

export function menuClose(menu, bg) {
    menu.classList.add("display__none");
    bg.classList.add('display__none');
}

export function cartCheck(menu) {
    menu.classList.toggle('display__none');
}

export function menuList(e) {
    const wrappersNav = document.querySelector('.wrappers__nav');
    const buttonHeadClose = document.querySelector('.button__head-close');
    if (e.matches) {
        console.log('menuNav desk');
        wrappersNav.classList.remove('display__none');
        buttonHeadClose.classList.add('display__none');
    } else {
        wrappersNav.classList.add('display__none');
        buttonHeadClose.classList.remove('display__none');
        console.log('menuNav mobile');
    }
}
