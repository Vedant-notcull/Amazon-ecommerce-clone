import { cart } from '/scripts/data/cart-class.js';
import { getProduct } from '/scripts/products.js'
import { getDeliveryId, deliveryOptions } from '/scripts/delivery.js'
import{addOrder,removeOrders} from '/scripts/order.js'

export function paymentUi() {
  
  document.querySelector('.order-box')
    .innerHTML = '';
  let productPrice = 0;
  let quantity = 0
  let orderSummary = ''
  let shipping = 0;
  
  
  let cart = JSON.parse(localStorage.getItem('cart-oop')) || [];
  
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.itemId)
    productPrice += Number(product.price) * Number(cartItem.quantity)
    quantity += cartItem.quantity
    
    
    const deliveryOption = getDeliveryId(deliveryOptions, cartItem)
    shipping += Number(deliveryOption.price)
    
  })
  
  const total = shipping + productPrice
  const tax = Number(total) * 0.1
  const totalwithTax = total + (tax)
  
  orderSummary =
    `
  <div class="head">
    Oder-Summary
  </div>
  
  <div class="calculation">
   <nav class="add">
     <div class="Items">
       <span>Items (${quantity}):</span>
       <span>Shipping & handling:</span>
     </div>
     <div class="calcu">
      <span>₹${productPrice}</span>
      <span>₹${shipping}</span>
     </div>
   </nav>
   
   <nav class="total">
    <div class="Items">
     <span>Total bedore tax: </span>
     <span>estimated tax(10%): </span>
    </div>
     <div class="calcu">
       <div>₹${(total).toFixed(1)}</div>
       <span>₹${(tax).toFixed(1)}</span>
     </div>
   </nav>
  </div>
  
  <div class="order-button">
    <nav class="order-cost">
      <div>Order total</div>
      <div>₹${totalwithTax}</div>
    </nav>
    <button class="order-button"
    >Place Your Order</button>
  </div>
  `
  
  document.querySelector('.order-box')
    .innerHTML += orderSummary
  
  document.querySelector('.order-button')
    .addEventListener('click', async () => {
  try {
    const response = await fetch('https://supersimplebackend.dev/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cart: cart
      })
    });
    
    const order = await response.json();
    addOrder(order.cart)
  } catch (error) {
    console.error('Failed to place order:', error);
    // Handle error here
  }
  
});

document.querySelector('.order-clear').
addEventListener('click',()=>{
  removeOrders();
})


}


