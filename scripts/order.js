export let orders =JSON.parse(localStorage.getItem('ORDERR')) || [];

export function addOrder(order){
  orders.unshift(order)
  localStorage.setItem('ORDERR', JSON.stringify(orders))
  console.log(orders)
}
export function removeOrders( ){
  localStorage.removeItem('ORDERR');
  console.log(orders)
}