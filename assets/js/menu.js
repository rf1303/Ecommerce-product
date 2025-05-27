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
