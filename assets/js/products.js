


export const imgSneakers = [
  "./assets/images/image-product-1.jpg",
  "./assets/images/image-product-2.jpg",
  "./assets/images/image-product-3.jpg",
  "./assets/images/image-product-4.jpg",
];




export function productSneaker(i){
    const imageSneaker = document.querySelector('.images__sneakers');
    imageSneaker.src = imgSneakers[i];

};
