import {orders} from '/scripts/data/order-data.js'
import{getProduct, loadProductsFetch} from '/scripts/products.js'
import { deliveryOptions, getDeliveryId, calculateDate } from '/scripts/delivery.js'

console.log(orders)


let divhout= document.querySelector('.blank')
loadProductsFetch().then(()=>{
let  blk= '' ;
let allOrdersHTML = '';
let itemId ;

orders.forEach( (order)=>{
  console.log(order.orderdate)
  let orderHTML = `
    <nav class="order-box" >
  <div class="order-info">
   <div class="part1">
    <span class="title">Order Placed</span>
    <span>${order.orderdate}</span>
   </div>
   
   <div class="part2">
     <span class="title">Total</span>
     <span>₹399.00</span>
   </div>
   
   <div class="part3">
     <span class="title">Order Id</span> 
     <span> ${order.orderId} </span>
   </div>
  </div>
  `  // Start of one full order
  order.items.forEach( ( orderItem)=>{
    
      
    itemId = orderItem.itemId
   // console.log(itemId)
 const product = getProduct(itemId) 
    
    const delivery = getDeliveryId(deliveryOptions, orderItem)
    const deliverydate = calculateDate(delivery)
    const dateString = deliverydate.format('D, MMMM ')
    orderHTML += `
    

  <div class="order-main">
    
   <div class="order-bin">
    <nav class="sec1">
    <img src="${product.image}">
    </nav>
    
    <nav class="sec2">
      <div>${product.name}
      </div>
      <div>Arriving on: ${dateString}</div>
      <div>Quantity: ${orderItem.quantity}</div>
      <button class="buy-again">
      <img src="/images/buy-again.png" >
        Buy again
      </button>
    </nav>
    
    <nav class="sec3">
     <button class="track">
      Track Package
     </button>
    </nav>
   </div>
   
    </div>
  
  
  


  `
  
  
  
    })
   orderHTML +=  `</nav>`; // End of one full order
    allOrdersHTML += orderHTML;
  })
  
  document.querySelector('.layout').innerHTML += allOrdersHTML
})


