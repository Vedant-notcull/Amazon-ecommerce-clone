import { deliveryOptions,getDeliveryId,
  calculateDate
} from '/scripts/delivery.js';
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
  cart = JSON.parse(localStorage.getItem('cart-oop')) || []
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity
  })
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
  
}







//when the delivery date is updated in local storage
// it gets the new date and updates the product box headline 
export function headline() {
  let cart = JSON.parse(localStorage.getItem('cart-oop'))
  
  cart.forEach((cartItem) => {
  const itemId = cartItem.itemId;

let delivery = getDeliveryId(deliveryOptions, cartItem)
const deliverydate = calculateDate(delivery)
const dateString = deliverydate.format('dddd, MMMM D')
    
    
    const productBox = document.querySelector(`.js-remove-${itemId}`);
    if (productBox) {
      const headline = productBox.querySelector('.headline');
      if (headline) {
        headline.innerHTML = `Delivery: ${dateString}`;
      }
    }
  })
  
}