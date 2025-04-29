import {cart as ogcart, checkMatchingQuantity} from '../scripts/cart.js'
import {products,loadProductsFetch} from '../scripts/products.js'
import {displayAdded, quantityIncrease } from '../scripts/functions.js'

loadProductsFetch().then(()=>{
updateDisplay();
})

function updateDisplay(){ 
quantityIncrease(ogcart)
products.forEach((item) => {
  document.querySelector('.item-layout')
    .innerHTML += `
    <div class="item-box">
     <div class="item-img">
      <img src="${item.image}"/>
     </div>
     
    <nav class="item-info">
     <div class="item-name">
      ${item.name}
     </div>
     
     <div class="item-rating">
      <div class="rating-img">
       <img src="/images/rating/rating-${item.rating.stars *10}.png" >
      </div>
      <div class="rating-number">${item.rating.count}</div>
     </div>
     
     <div class="price-box">
     ${item.price}
     </div>
     <div class="quantity-box">
      <select class= "select-quantity-${item.productid}" >
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option> 
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
     </div>
     ${item.extraInfo()}
    </nav>
    <div class="added-to-cart-${item.productid}">
     <img src="images/checkmark.png"> Added
    </div>
    <div class="add-to-cart">
    <button class="cart-btn" 
    data-item-id ="${item.productid}"> Add to Cart</button>
    </div>
    </div>

  `
});



let cart =  ogcart
  
 buttonclick() 
function buttonclick() {
  document.querySelectorAll('.cart-btn').forEach((button) => {
    // looping through each buttons and onlcick event
    
    let matching;
    button.addEventListener('click', () => {
      const itemId = button.dataset.itemId;
      
      
      //looping thorough cart to check same item  
      ogcart.forEach((product) => {
        if (itemId === product.itemId) {
          matching = product
        }
      })
      
      //takes user selected quantity and increases the cart accordingly 
      checkMatchingQuantity(matching, itemId,)
      
      
      //message after clicking button
      displayAdded(itemId);
      
      // makes the cart logo up interatcive
      localStorage.setItem('cart', JSON.stringify(cart))
      
      quantityIncrease(cart);
      //consolelog cart 
      console.log(cart)
      
      
    }); //event listner end
  })
}  
  
  
}