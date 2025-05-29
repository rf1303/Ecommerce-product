
let ni = 0;
let nc = 0;
let pn = 0;
let pf = 0;

export function cartOrder(i) {

        const numberOrder = document.querySelector('.numbers__order');
        const priceNumber = document.querySelector('.price__number');
        const priceFinal = document.querySelector('.price__final');
        
        if (i <= 0) {
            i = 0;
            ni = 0;
            priceNumber.textContent = `$${125}`;  
        } else {
            priceNumber.textContent = `$${125*i}`;  
            priceFinal.textContent = `$${250*i}`;  
            pn = 125;
            ni = i;
        }
        numberOrder.textContent = `${i}`;
    }

export function cartAdd() {
    
    nc = nc + ni;
    const cartEmpty = document.querySelector('.cart__empty');
    const cartNumber = document.querySelector('.cart__number');
    const cartItems = document.querySelector('.cart__items');
    const buttonCheck = document.querySelector('.button__checkout');
    const priceNumber = document.querySelector('.items__price');
    const itemNumber = document.querySelector('.items__nro');
    const itemsTotal = document.querySelector('.items__total');
    const numberOrder = document.querySelector('.numbers__order');
    pf = pn*nc;
    cartEmpty.classList.add('display__none');
    buttonCheck.classList.remove('display__none');
    cartItems.classList.remove('display__none');
    cartNumber.textContent = `${nc}`;
    priceNumber.textContent = `$${pn}`;
    itemNumber.textContent = `${nc}`;
    itemsTotal.textContent = `${pf}`;
    numberOrder.textContent = `0`;
   
    ni = 0;
}

export function cartTrash() {
   console.log('delete ', nc, ni); 
    const cartNumber = document.querySelector('.cart__number');
    const cartItems = document.querySelector('.cart__items');
    const buttonCheck = document.querySelector('.button__checkout');
    const cartEmpty = document.querySelector('.cart__empty');
    buttonCheck.classList.add('display__none');
    cartItems.classList.add('display__none');
    cartEmpty.classList.remove('display__none');
    nc = 0;
    cartNumber.textContent = `0`;
}


