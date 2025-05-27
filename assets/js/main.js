
import {menuOpen, menuClose, cartCheck} from './menu.js';
import { imgSneakers, productSneaker } from './products.js';

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
    const cartBox = document.querySelector('.cart__box');
    const thumbailsItems = document.querySelector('.wrappers__thumbails');
    const numbersMinus = document.querySelector('.numbers__minus');
    const numbersPlus = document.querySelector('.numbers__plus');
    const buttonAddCart = document.querySelector('.button__add-cart');
    const wrappersActive = document.querySelector('.wrappers__lightbox--active');
    const buttonProduct = document.querySelector('.button__products--active');



    let imgIndex = 0;

    buttonHeadOpen.addEventListener('click', () => menuOpen(wrappersNav, wrappersBg));

    buttonHeadClose.addEventListener('click', () => menuClose(wrappersNav, wrappersBg));

    buttonCart.addEventListener('click', () => cartCheck(cartBox));

    buttonPrev.addEventListener('click', () => {
        imgIndex--;
        console.log('buttonPrev: ', imgIndex);
        imgIndex = ( imgIndex + imgSneakers.length) % imgSneakers.length;
        productSneaker(imgIndex);
    });

    buttonNext.addEventListener('click', () => {
        imgIndex++;
        console.log('buttonNext: ', imgIndex);
        imgIndex = ( imgIndex + imgSneakers.length) % imgSneakers.length;
        productSneaker(imgIndex);
    });




});
