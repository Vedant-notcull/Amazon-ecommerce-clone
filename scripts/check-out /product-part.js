import {
  cart as cartt,
  updateQty,
  updatedeliveryId
} from '/scripts/cart.js'
import { products, getProduct } from '/scripts/products.js'
import { headline } from '/scripts/functions.js'
import { checkout } from '/scripts/check-out /checkOut-header.js'
import { deliveryOptions, getDeliveryId, calculateDate } from '/scripts/delivery.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { paymentUi } from '/scripts/check-out /money-part.js'

console.log('heloo')





let cart = JSON.parse(localStorage.getItem('cart')) || []

export function ui() {
  
  checkout()
  document.querySelector('.layout-1').innerHTML = ''
  
  cart.forEach((cartItem) => {
    const itemId = cartItem.itemId;
    let matchingItem = getProduct(itemId)
    
    let delivery = getDeliveryId(deliveryOptions, cartItem)
    const deliverydate = calculateDate(delivery)
    const dateString = deliverydate.format('dddd, MMMM D')
    /*  const today = dayjs();
     const deliverydate = today.add(
        delivery.days, 'days') */
    
    
    
    
    
    document.querySelector('.layout-1').innerHTML += `
<div class="product-box 
js-remove-${cartItem.itemId}" >
 <div class="product-info">
   <nav class="headline">
     Delivery: ${dateString}
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
  
  
${deliveryHTML(cartItem)}
 </div>
 </nav>

 </div
</div>
  `;
    
    
  });
  
  
  document.querySelector('.clear')
    .addEventListener('click', () => {
      localStorage.removeItem('cart');
      document.querySelector('.layout-1').innerHTML = `
    <h1>Review your Order</h1>
    `;
    })
  
  
  //js-remove-${cartItem.itemId}
  
  
  function deliveryHTML(cartItem) {
    let html = ''
    
    deliveryOptions.forEach((delivery) => {
      const isChecked = delivery.id === cartItem.deliveryOptionId
      
     let currentDili = getDeliveryId(deliveryOptions, cartItem)
      const deliverydate = calculateDate(delivery)
      const dateString = deliverydate.format('dddd, MMMM D')
      
      const deliveryprice = delivery.price === 0 ?
        'FREE - ' :
        `₹${delivery.price} - `
      
      html +=
        `
  <div class="delivery-input-select"
  data-delivery-option-id="${delivery.id}"
  data-item-id="${cartItem.itemId}">
   <input type="radio"
   ${isChecked ? 'checked' : ''}
   class="delivery-input"
   name="${cartItem.itemId}"/>
   
   <section class="part--2">
   <div class="delivery-date">
     ${dateString}
   </div>
   <div class="shipping">
     ${deliveryprice} Shipping
   </div>
   </section>
   </div>  
  `
      
      
    });
    return html
    
  }
  
  
  
  
  
  
  
  
  deletItems();
  
  function deletItems() {
    let btnId;
    let updated = [];
    
    document.querySelectorAll('.delete-link').forEach((link) => {
      
      link.addEventListener('click', (event) => {
        btnId = event.target.dataset.itemId;
        updated = [];
        cart = JSON.parse(localStorage.getItem('cart')) || []
        
        cart.forEach((cartItem) => {
          if (btnId !== cartItem.itemId) {
            updated.push(cartItem)
            
          }
        })
        
        cart = updated;
        localStorage.setItem('cart', JSON.stringify(cart))
        
        cart = JSON.parse(localStorage.getItem('cart')) || []
        const removed = document.querySelector(`.js-remove-${btnId}`)
        
        checkout()
        paymentUi()
        
        localStorage.setItem('cart', JSON.stringify(cart))
        ui()
        // ui()
        // deletItems()
      })
      
    })
  }
  //const qtyInput = document.querySelectorAll('.qty-input')
  
  let updtId;
  document.querySelectorAll('.update-link').forEach((link) => {
    
    link.addEventListener('click', (event) => {
      // hides previous clicked ones
      updtId = event.target.dataset.itemId;
      
      //display only the one  matched with id
      document.querySelectorAll('.after-updt').forEach((update) => {
        
        update.classList.remove('on');
        if (update.dataset.itemId === updtId) { update.classList.add('on'); }
        
        
      }); //all after- update endsloop
    }) //link event listener end 
    
  }) // loop for all update link 
  
  
  const save = document.querySelectorAll('.save-link')
  savebbtn()
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function savebbtn() {
    save.forEach((save) => {
      
      save.addEventListener('click', () => {
        
        
        const saveId = save.dataset.itemId
        if (saveId === updtId) {
          const matchingUpdt = document.querySelector(`.after-updt[data-item-id="${updtId}"]`);
          matchingUpdt.classList.remove('on')
        };
        
        updateQty(saveId)
        checkout()
        paymentUi()
        
      })
      
      
      
    })
  }
  
  document.querySelectorAll('.delivery-input-select').forEach((element) => {
    element.addEventListener('click', () => {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // const {itemId, deliveryOptionId} = element.dataset
      const deliveryOptionId = element.dataset.deliveryOptionId
      const itemId = element.dataset.itemId
      
      updatedeliveryId(itemId, deliveryOptionId)
      headline()
      paymentUi()
    })
    
  })
  
}