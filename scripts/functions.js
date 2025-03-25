

// displayAdded() function
//display the added message for 1 sec after clicking the add to cart button 
function displayAdded(itemId) {
  let timeoutId;
  const added = document.querySelector(`.added-to-cart-${itemId}`)
  added.classList.add('after-added-item');
  clearTimeout(timeoutId);
  
  timeoutId = setTimeout(() => { added.classList.remove('after-added-item') }, 1200)
};


//quantity increase function 
// increase the quantity of items in cart in the logo in header
function quantityIncrease() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity
  })
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}


// checkMatchingQuantity()
//increases the quantity of new item and matching one as per the user select
function checkMatchingQuantity(matching, itemId) {
  const saman = document.querySelector(`.select-quantity-${itemId}`)
  if (matching) {
    matching.quantity += Number(saman.value)
  } else {
    cart.push({
      itemId: itemId,
      quantity: Number(saman.value)
    })
  }
}