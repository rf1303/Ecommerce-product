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

export function lightBox(e) {
    console.log('lightBox');
    const wrappersBg = document.querySelector('.wrappers__nav--bg');
    const wrappersActive = document.querySelector('.wrappers__lightbox--active');
    if (e.matches) {
        wrappersActive.classList.remove('display__none')
        wrappersBg.classList.remove('display__none');
    } else {
        wrappersActive.classList.add('display__none');
        wrappersBg.classList.add('display__none');
    } 
}

export function lightClose() {
    const wrappersBg = document.querySelector('.wrappers__nav--bg');
    const wrappersActive = document.querySelector('.wrappers__lightbox--active');
    wrappersActive.classList.add('display__none');
    wrappersBg.classList.add('display__none');
  
}







