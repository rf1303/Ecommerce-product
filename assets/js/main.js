import {menuOpen, menuClose, cartCheck, menuList, lightBox, lightClose, lightBoxChange} from './menu.js';
import { imgSneakers, productSneaker, prodSneakLight} from './products.js';
import {cartOrder, cartAdd, cartTrash} from './cart.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('inicio');
    const buttonHeadOpen = document.querySelector('.button__head-open');
    const buttonHeadClose = document.querySelector('.button__head-close');
    const buttonCart = document.querySelector('.button__cart');
    const buttonTrash = document.querySelector('.button__trash');
    const buttonCheck = document.querySelector('.button__checkout');
    const buttonPrev = document.querySelector('.button__prev');
    const buttonNext = document.querySelector('.button__next');
    const buttonPrevL = document.querySelector('.button__prev--active');
    const buttonNextL = document.querySelector('.button__next--active');
    const wrappersBg = document.querySelector('.wrappers__nav--bg');
    const wrappersNav = document.querySelector('.wrappers__nav');
    const menuNav = window.matchMedia('(min-width: 84.99em)');
    const cartBox = document.querySelector('.cart__box');
    const numbersMinus = document.querySelector('.numbers__minus');
    const numbersPlus = document.querySelector('.numbers__plus');
    const buttonAdd = document.querySelector('.button__add-cart');
    const buttonSneaker = document.querySelector('.button__sneaker');
    const btnsThumbail = document.querySelectorAll('.button__thumbails'); 
    const btnsThumbLight = document.querySelectorAll('.button__thumbails--light'); 
    const checkMod = document.querySelector('.cart__check--mod');
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
        lightBoxChange(menuNav);
    });

/* ###############  LIGHTBOX  ############## */
   
    buttonSneaker.addEventListener('click', () => {
        console.log('buttonSneaker');
       lightBox(menuNav);
    });

    buttonProduct.addEventListener('click', () => {
        lightClose();
    });

/* ########## CART BOX ######################## */

    buttonCart.addEventListener('click', () => cartCheck(cartBox));

/* ############### PRODUCT GALLERY IMAGES ############# */

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

   btnsThumbail.forEach((btn) => {
        
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.img);
        productSneaker(i, 1);

        btnsThumbail.forEach((b) => b.classList.remove("button__thumbails--active"));
        btn.classList.add("button__thumbails--active")
        });
   }); 

/* ################## LIGHTBOX ACTIVE ############## */

    buttonPrevL.addEventListener('click', () => {
        imgIndex--;
        imgIndex = ( imgIndex + imgSneakers.length) % imgSneakers.length;
        console.log('ButtonPL: ', imgIndex)
        prodSneakLight(imgIndex);
    });

    buttonNextL.addEventListener('click', () => {
        imgIndex++;
        imgIndex = ( imgIndex + imgSneakers.length) % imgSneakers.length;
        console.log('ButtonNL: ', imgIndex)
        prodSneakLight(imgIndex);
    });

   btnsThumbLight.forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.img);
        prodSneakLight(i);
        btnsThumbLight.forEach((b) => b.classList.remove("button__thumbails--active"));
            btn.classList.add("button__thumbails--active")
      });
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
        cartNum = 0;
    });

    buttonTrash.addEventListener('click', () => {
        cartTrash();
        cartNum = 0;
    });

    buttonCheck.addEventListener('click', () => {
        checkMod.classList.remove('display__none');
        setTimeout(() => {
            checkMod.classList.add('display__none');
        }, 3500);
    });

});
