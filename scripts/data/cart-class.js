import { products } from '/scripts/products.js'

export const cart = {
  cartItems : JSON.parse(localStorage.getItem('cart-oop')) || [],
  
  itemId: undefined,
  
  saveToStorage(){
  localStorage.setItem('cart-oop', JSON.stringify(this.cartItems))
  },
  
  checkMatchingQuantity(matching,itemId)
  {
  const saman = document.querySelector(`.select-quantity-${itemId}`)
  if (matching) {
    matching.quantity += Number(saman.value)
    this.saveToStorage()
  } else {
    this.cartItems.push({
      itemId: itemId,
      quantity: Number(saman.value),
      deliveryOptionId: '2',
    })
    this.itemId = itemId
    this.saveToStorage()
  }
  },
  
  updateQty(saveId) {
  const qtyInput = document.querySelector(`.qty-input[data-item-id="${saveId}"]`);
  
  
  const qtychange = Number(qtyInput.value)
  this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || []
  
  const productBoxx = document.querySelector(`.js-remove-${saveId}`)
  const qtyProduct = productBoxx.querySelector('.info-quantity')
  
  if (qtychange > 0) {
    qtyProduct.innerHTML = `Quantity: ${qtychange}`
    
    qtyInput.value = '';
    
    this.cartItems.forEach((cartItem) => {
      if (saveId === cartItem.itemId) {
        cartItem.quantity = qtychange
        this.saveToStorage()
      }
    });
    };
  }, 
  
  updatedeliveryId(itemId, deliveryOptionId) {
  this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || []
  
  let matching;
  this.cartItems.forEach((cartItem) => {
    if (cartItem.itemId === itemId) {
      matching = cartItem
    }
  })
  matching.deliveryOptionId = deliveryOptionId
  this.saveToStorage()
  },
  
}


/*   

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

let itemId;
// checkMatchingQuantity()
//increases the quantity of new item and matching one as per the user select
export function checkMatchingQuantity(matching, itemId, ) {
  const saman = document.querySelector(`.select-quantity-${itemId}`)
  if (matching) {
    matching.quantity += Number(saman.value)
    localStorage.setItem('cart', JSON.stringify(cart))
  } else {
    cart.push({
      itemId: itemId,
      quantity: Number(saman.value),
      deliveryOptionId: '2',
    })
    itemId = itemId
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
}










export function updateQty(saveId) {
  const qtyInput = document.querySelector(`.qty-input[data-item-id="${saveId}"]`);
  
  
  const qtychange = Number(qtyInput.value)
  cart = JSON.parse(localStorage.getItem('cart')) || []
  
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


*/