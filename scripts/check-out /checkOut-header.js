import {cart} from '/scripts/cart.js'


export function checkout() {
cart.cartItems = JSON.parse(localStorage.getItem('cart-oop'))
let cartquantity = 0
cart.cartItems.forEach((item) => {
  cartquantity += item.quantity
})
document.querySelectorAll('.sec2').forEach( (checkout)=>{
  checkout.innerHTML = `Checkout (${cartquantity} items)`
})
}