import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

export let orders =JSON.parse(localStorage.getItem('ORDERR')) || [];

export function addOrder(order){
  const orderId = getOrderId();
  const today = dayjs().format('D MMMM, YYYY');
  
  let newOrder = {
    orderId,
    items:order,
    orderdate:today
  }
  orders.unshift(newOrder)
  localStorage.setItem('ORDERR', JSON.stringify(orders))
  console.log(orders)
}
export function removeOrders( ){
  localStorage.removeItem('ORDERR');
  orders = JSON.parse(localStorage.getItem('ORDERR')) || [];
  console.log(orders)
  const today = dayjs().format('D MMMM, YYYY');
}


export function getOrderId(){
  let lastId = parseInt(localStorage.getItem('lastOrderId')) || 1000
  lastId += 10;
  localStorage.setItem('lastOrderId', lastId);
  
  return lastId
}