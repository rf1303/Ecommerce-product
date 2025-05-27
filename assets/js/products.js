


export const imgSneakers = [
  "./assets/images/image-product-1.jpg",
  "./assets/images/image-product-2.jpg",
  "./assets/images/image-product-3.jpg",
  "./assets/images/image-product-4.jpg",
];




export function productSneaker(i, np){
    const imageSneaker = document.querySelector('.images__sneakers');

    const nextPrev = np > 0 ? 15 : -15;
    
    imageSneaker.style.opacity = "0";
    imageSneaker.style.transform = `translateX(${nextPrev}rem)`;

    setTimeout(() => {
        imageSneaker.src = imgSneakers[i];
        void imageSneaker.offsetWidth;
         
        imageSneaker.style.transform = `translateX(0)`;
        imageSneaker.style.opacity = "1";


    }, 300);

};
