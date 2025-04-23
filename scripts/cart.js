import { products } from '/scripts/products.js'

export let cart = JSON.parse(localStorage.getItem('cart'))|| [] ;

let itemId;
// checkMatchingQuantity()
//increases the quantity of new item and matching one as per the user select
export function checkMatchingQuantity(matching, itemId,) {
  const saman = document.querySelector(`.select-quantity-${itemId}`)
  if (matching) {
    matching.quantity += Number(saman.value)
    localStorage.setItem('cart', JSON.stringify(cart))
  } else {
    cart.push({
      itemId: itemId,
      quantity: Number(saman.value),
      deliveryOptionId : '2',
    })
  itemId = itemId
  localStorage.setItem('cart', JSON.stringify(cart))
  }
  
}










export function updateQty(saveId) {
  const qtyInput = document.querySelector(`.qty-input[data-item-id="${saveId}"]`);
  
  
  const qtychange = Number(qtyInput.value)
  cart = JSON.parse(localStorage.getItem('cart'))|| []
  
  const productBoxx = document.querySelector(`.js-remove-${saveId}`)
  const qtyProduct = productBoxx.querySelector('.info-quantity')
  
  if (qtychange > 0) {
    qtyProduct.innerHTML = `Quantity: ${qtychange}`
    
    qtyInput.value = '';
    
    cart.forEach((cartItem) => {
      if (saveId === cartItem.itemId) {
        cartItem.quantity = qtychange
        localStorage.setItem('cart', JSON.stringify(cart))
        
      }
    })
    
  }
  
  
}

export function updatedeliveryId(itemId, deliveryOptionId) {
  cart = JSON.parse(localStorage.getItem('cart')) || []

  let matching;
  cart.forEach((cartItem) => {
    if (cartItem.itemId === itemId) {
      matching = cartItem
    }
  })
  matching.deliveryOptionId = deliveryOptionId
  localStorage.setItem('cart', JSON.stringify(cart))
  
  
}