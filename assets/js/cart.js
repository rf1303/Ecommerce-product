

// export function cartBox() {
//         
//
//
//
// };

export function cartOrder(i) {

        const numberOrder = document.querySelector('.numbers__order');
        const priceNumber = document.querySelector('.price__number');
        const priceFinal = document.querySelector('.price__final');
        
        if (i <= 0) {
            i = 0;
            priceNumber.textContent = `$${125}`;  
        } else {
          priceNumber.textContent = `$${125*i}`;  
          priceFinal.textContent = `$${250*i}`;  
        }

        numberOrder.textContent = `${i}`;
    }

