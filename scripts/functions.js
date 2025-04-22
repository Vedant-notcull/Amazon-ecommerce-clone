import { deliveryOptions } from '/scripts/delivery.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

// displayAdded() function
//display the added message for 1 sec after clicking the add to cart button 
export function displayAdded(itemId) {
  let timeoutId;
  const added = document.querySelector(`.added-to-cart-${itemId}`)
  added.classList.add('after-added-item');
  clearTimeout(timeoutId);
  
  timeoutId = setTimeout(() => { added.classList.remove('after-added-item') }, 1200)
};


//quantity increase function 
// increase the quantity of items in cart in the logo in header
export function quantityIncrease(cart) {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity
  })
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
  
}


export function checkout() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  let cartquantity = 0
  cart.forEach((item) => {
    cartquantity += item.quantity
  })
  document.querySelector('.sec2').innerHTML =
    `Checkout (${cartquantity} items)`
  
}




//when the delivery date is updated in local storage
// it gets the new date and updates the product box headline 
export function headline() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  
  cart.forEach((item) => {
    const itemId = item.itemId;
    const deliveryOptionId = item.deliveryOptionId;
    
    
    let delivery;
    const deliveryId = item.deliveryOptionId
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryId) {
        delivery = option
      }
    });
    
    const deliveryDate = dayjs().add(delivery.days, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    
    
    const productBox = document.querySelector(`.js-remove-${itemId}`);
    if (productBox) {
      const headline = productBox.querySelector('.headline');
      if (headline) {
        headline.innerHTML = `Delivery: ${dateString}`;
      }
    }
  })
  
}