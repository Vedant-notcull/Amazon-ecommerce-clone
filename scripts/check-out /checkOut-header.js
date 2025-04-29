import {cart} from '/scripts/cart.js'


export function checkout() {
cart.cartItems = JSON.parse(localStorage.getItem('cart-oop'))
let cartquantity = 0
cart.cartItems.forEach((item) => {
  cartquantity += item.quantity
})
document.querySelector('.sec2').innerHTML =
  `Checkout (${cartquantity} items)`

}