
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


export function checkout(cart){
 cart = JSON.parse(localStorage.getItem('cart'))
  let cartquantity = 0
  cart.forEach( (item)=>{
   cartquantity += item.quantity
  })
  document.querySelector('.sec2').innerHTML = 
  `Checkout (${cartquantity} items)`
  
}