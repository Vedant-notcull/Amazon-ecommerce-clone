import {getProduct,loadProductsFetch} from '/scripts/products.js'
import {getOrder} from '/scripts/data/order-data.js'
import {getDeliveryId,calculateDate,deliveryOptions} from '/scripts/delivery.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'


loadProductsFetch().then( ()=>{
  
let order = 50



const url = new URL(window.location.href)
const orderId = url.searchParams.get('orderId')
const productId = url.searchParams.get('productId')
const product = getProduct(productId)

const orderItem = getOrder(orderId)

//per item in order list 
let hello = ''
let ittem = orderItem.items.find(item => item.itemId === productId);

// for geting felivery date of product 
  const delivery = getDeliveryId(deliveryOptions, ittem)
  const deliverydate = calculateDate(delivery)
  const dateString = deliverydate.format('D,  MMMM')
  
  //delivery date
  let deliverDatee = dateString.split(', ')
  
  //todays date 
  let todaysDate = dayjs().format('D, MMMM ')
  todaysDate = todaysDate.split(', ')

  // order date 
  let orderDate = orderItem.orderdate
  orderDate = orderDate.split(', ')
  
  //progrss bar percent 

  
  const percent =  (
    (Number(todaysDate[0]) - Number(orderDate[0])) /
   (Number(deliverDatee[0]) - Number(orderDate[0]))
  ) * 100
  

//html
let trackingHtml = `
 <a href="orders.html">
   view all orders
 </a>
 
 <div class="headline">
   <h2>Arriving on ${dateString}</h2>
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
    <div class="progress-bar2" style="width:${percent}%">
      <!--progress-bar-->
    </div>
  </div>
 
`

document.querySelector('.layout').innerHTML = trackingHtml

deliveryStatus();




function deliveryStatus(){
if (percent >= 0 && percent <= 49 ){
  document.querySelector('.prep').classList.add('green')
}else if (percent >= 50 && percent <= 99) {
  document.querySelector('.prep').classList.remove('green')
  
  document.querySelector('.ship').classList.add('green')
}else if (percent >= 100 ){
  document.querySelector('.ship').classList.remove('green')
  
  document.querySelector('.delvry').classList.add('green')
};
}//delivery status end



});//load products fetch 

