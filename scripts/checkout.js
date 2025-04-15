import { cart as cartt} from '/scripts/cart.js'
import { products } from '/scripts/products.js'
console.log('heloo')
let cart = JSON.parse(localStorage.getItem('cart'))

cart.forEach((cartItem) => {
  const itemId = cartItem.itemId;
  
  let matchingItem = '';
  
  products.forEach((product) => {
    if (itemId === product.productid) {
      matchingItem = product
    }
  })
  
  
document.querySelector('.layout-1').innerHTML +=  `
<nav class="product-box">
 <div class="product-info">
   <nav class="headline">
     Delivery: Tuesday 21 jan
   </nav>
   <nav class="info-img-part">
   <div class="image-part">
     <img src="${matchingItem.image}">
   </div>
   <div class="info-part">
     <span class=info-name>
       ${matchingItem.name}
     </span>
     <span class="info-price">
      ${matchingItem.price}
     </span>
     <span class="info-quantity">
       Quantity: ${cartItem.quantity}</span>
   </div>
   
  <div class="delivery-info">
    <span class=info-name>
     Choose a Delivery option
   </span>
  
  <div class="delivery-input-select">
   <input type="radio"
   class="delivery-input"
   name="${cartItem.itemId}">
   
   <section class="part--2">
   <div class="delivery-date">
     Tuesday, June 21
   </div>
   <div class="shipping">
     Free Shipping
   </div>
   </section>
   </div>
   
  <div class="delivery-input-select">
   <input type="radio"
   class="delivery-input"
   name="${cartItem.itemId}">
   
   <section class="part--2">
   <div class="delivery-date">
     Tuesday, June 21
   </div>
   <div class="shipping">
     Free Shipping
   </div>
   </section>
   </div>
  
  <div class="delivery-input-select">
   <input type="radio"
   class="delivery-input"
   name="${cartItem.itemId}">
   
   <section class="part--2">
   <div class="delivery-date">
     Tuesday, June 21
   </div>
   <div class="shipping">
     Free Shipping
   </div>
   </section>
   </div>
   
 </div>
 </nav>

 </div
  </nav>
  `;
  
});

document.querySelector('.clear')
.addEventListener('click', ()=>{
  localStorage.removeItem('cart')
})