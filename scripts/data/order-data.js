export let orders =JSON.parse(localStorage.getItem('ORDERR')) || [];

export function addOrder(order){
  orders.unshift(order)
  localStorage.setItem('ORDERR', JSON.stringify(orders))
  console.log(orders)
}
export function removeOrders( ){
  localStorage.removeItem('ORDERR');
  orders = JSON.parse(localStorage.getItem('ORDERR')) || [];
  console.log(orders)
}

//orders.forEach( (order)=>{
//document.querySelector('.blank').innerHTML += order
//})

