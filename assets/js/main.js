
import {menuOpen, menuClose, cartCheck, menuList, lightBox, lightClose} from './menu.js';
import { imgSneakers, productSneaker } from './products.js';
import {cartOrder, cartAdd, cartTrash} from './cart.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('inicio');
    const buttonHeadOpen = document.querySelector('.button__head-open');
    const buttonHeadClose = document.querySelector('.button__head-close');
    const buttonCart = document.querySelector('.button__cart');
    const buttonTrash = document.querySelector('.button__trash');
    const buttonCheck = document.querySelector('.button__checkout');
    const imageSneaker = document.querySelector('.images__sneakers');
    const buttonPrev = document.querySelector('.button__prev');
    const buttonNext = document.querySelector('.button__next');
    const wrappersBg = document.querySelector('.wrappers__nav--bg');
    const wrappersNav = document.querySelector('.wrappers__nav');
    const menuNav = window.matchMedia('(min-width: 84.99em)');
    const cartBox = document.querySelector('.cart__box');
    const thumbailsItems = document.querySelector('.wrappers__thumbails');
    const numbersMinus = document.querySelector('.numbers__minus');
    const numbersPlus = document.querySelector('.numbers__plus');
    const buttonAdd = document.querySelector('.button__add-cart');
    const buttonSneaker = document.querySelector('.button__sneaker');
    const wrappersActive = document.querySelector('.wrappers__lightbox--active');
    const buttonProduct = document.querySelector('.button__products--active');

    let imgIndex = 0;
    let cartNum = 0;
    let nextPrev = 1;

    buttonHeadOpen.addEventListener('click', () => menuOpen(wrappersNav, wrappersBg));

    buttonHeadClose.addEventListener('click', () => menuClose(wrappersNav, wrappersBg));

/* ######## MENU NAV DESKTOP ############ */
    menuList(menuNav);

    menuNav.addEventListener('change', () => {
       menuList(menuNav);
       lightBox(menuNav);
    });

/* ###############  LIGHTBOX  ############## */
   
    buttonSneaker.addEventListener('click', () => {
        console.log('buttonSneaker');
       lightBox(menuNav);
    });

    buttonProduct.addEventListener('click', () => {
        lightClose();
    });

/* ############### PRODUCT GALLERY IMAGES ############# */
    buttonCart.addEventListener('click', () => cartCheck(cartBox));

    buttonPrev.addEventListener('click', () => {
        imgIndex--;
        nextPrev = -1;
        imgIndex = ( imgIndex + imgSneakers.length) % imgSneakers.length;
        productSneaker(imgIndex, nextPrev);
    });

    buttonNext.addEventListener('click', () => {
        imgIndex++;
        nextPrev = 1;
        imgIndex = ( imgIndex + imgSneakers.length) % imgSneakers.length;
        productSneaker(imgIndex, nextPrev);
    });

/* ################ CART BOX ################### */    

    numbersPlus.addEventListener('click', () => {
        cartNum++;
        cartOrder(cartNum);
    });
    
    numbersMinus.addEventListener('click', () => {
        cartNum--;
        cartOrder(cartNum);
    });

    buttonAdd.addEventListener('click', () => {
       cartAdd(); 
    });

    buttonTrash.addEventListener('click', () => {
        cartTrash();
    });


});
