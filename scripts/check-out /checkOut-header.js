import {cart} from '/scripts/cart.js'


export function checkout() {
const cart = JSON.parse(localStorage.getItem('cart'))
let cartquantity = 0
cart.forEach((item) => {
  cartquantity += item.quantity
})
document.querySelector('.sec2').innerHTML =
  `Checkout (${cartquantity} items)`

}