import {getProduct,loadProductsFetch} from '/scripts/products.js'
import {getOrder} from '/scripts/data/order-data.js'

loadProductsFetch().then( ()=>{
  
let order = 50



const url = new URL(window.location.href)
const orderId = url.searchParams.get('orderId')
const productId = url.searchParams.get('productId')
const product = getProduct(productId)

const orderItem = getOrder(orderId)

let hello = ''
let ittem = orderItem.items.find(item => item.itemId === productId);





let trackingHtml = `
 <a href="orders.html">
   view all orders
 </a>
 
 <div class="headline">
   <h2>Arriving on Friday,May 8</h2>
 </div>
 
 <div class="naming">${product.name}
 </div>
 <div class="naming">Quantity: ${ittem.quantity}</div>
 
 <div class="product-img">
  <img src=${product.image}
   alt="product-image">
  </div>
  
  <div class="progress-titles">
    <span class="prep">Preparing</span>
    <span class="ship">Shipped</span>
    <span class="delvry">Delivered</span>
  </div>
  <div class="progress-bar">
    <div class="progress-bar2">
      <!--progress-bar-->
    </div>
  </div>
 
`

document.querySelector('.layout').innerHTML = trackingHtml

deliveryStatus();




function deliveryStatus(){
if (order >= 0 && order <= 49 ){
  document.querySelector('.prep').classList.add('green')
}else if (order >= 50 && order <= 99) {
  document.querySelector('.prep').classList.remove('green')
  
  document.querySelector('.ship').classList.add('green')
}else if (order >= 100 ){
  document.querySelector('.ship').classList.remove('green')
  
  document.querySelector('.delvry').classList.add('green')
};
}//delivery status end



});//load products fetch 

