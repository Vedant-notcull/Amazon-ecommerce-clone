import { cart as cartt, updateQty } from '/scripts/cart.js'
import { products } from '/scripts/products.js'
import {checkout} from '/scripts/functions.js'
console.log('heloo')

let cart = JSON.parse(localStorage.getItem('cart'))



ui()
checkout(cart)
    
 function ui() {
  document.querySelector('.layout-1').innerHTML = '';
cart.forEach((cartItem) => {
  
  const itemId = cartItem.itemId;
  
  let matchingItem = '';
  
  products.forEach((product) => {
    if (itemId === product.productid) {
      matchingItem = product
    }
  })

  document.querySelector('.layout-1').innerHTML += `
<nav class="product-box 
js-remove-${cartItem.itemId}" >
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
<div class="qty-info">
     <span class="info-quantity">
       Quantity: ${cartItem.quantity}</span>
   <div class="links" >     
<span class="update-link"
data-item-id ="${cartItem.itemId}"
>update</span>
<div class="after-updt"
data-item-id ="${cartItem.itemId}">
  <input type="text" class="qty-input"
  data-item-id ="${cartItem.itemId}">
  <span class="save-link"
  data-item-id ="${cartItem.itemId}"
  >Save</span>
</div>


<span class="delete-link"
data-item-id ="${cartItem.itemId}"
>delete</span>
   </div>
 </div>  
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
}

document.querySelector('.clear')
  .addEventListener('click', () => {
    localStorage.removeItem('cart');
    document.querySelector('.layout-1').innerHTML= `
    <h1>Review your Order</h1>
    `;
  })


//js-remove-${cartItem.itemId}









deletItems();
function deletItems(){
  let btnId;
  let updated = [];

document.querySelectorAll('.delete-link').forEach((link) => {

  link.addEventListener('click', (event) => {
    btnId = event.target.dataset.itemId;
    updated = [];

    cart.forEach( (cartItem)=>{
    if (btnId !== cartItem.itemId) {
      updated.push(cartItem)
      
    }
    })
  
   cart = updated;
   localStorage.setItem('cart', JSON.stringify(cart))
   
   const removed = document.querySelector(`.js-remove-${btnId}`)
   
   removed.remove()
   checkout(cart)
  // ui()
  // deletItems()
  })

})
}
//const qtyInput = document.querySelectorAll('.qty-input')

let updtId ;
document.querySelectorAll('.update-link').forEach( (link)=>{
  
  link.addEventListener('click',(event)=>{
// hides previous clicked ones
  updtId = event.target.dataset.itemId;
  
//display only the one  matched with id
 document.querySelectorAll('.after-updt').forEach((update) => {
  
  update.classList.remove('on');
   if (update.dataset.itemId === updtId)
   { update.classList.add('on');}
  
  
 });//all after- update endsloop
 })//link event listener end 
 
})// loop for all update link 


const save = document.querySelectorAll('.save-link')
savebbtn()
function savebbtn(){ 
save.forEach((save)=>{
   
  save.addEventListener('click',()=>{
  
  
  const saveId = save.dataset.itemId
   if (save.dataset.itemId === updtId) {
   const matchingUpdt = document.querySelector(`.after-updt[data-item-id="${updtId}"]`); matchingUpdt.classList.remove('on')};
   
   
   updateQty(saveId)
   checkout(cart)

   })
  
  
  
  })
}
  
  





