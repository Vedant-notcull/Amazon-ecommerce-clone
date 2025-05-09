import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

export const deliveryOptions = [
{
  id: '1',
  days: 7,
  price: 0
}, {
  id: '2',
  days: 3,
  price: 199
}, {
  id: '3',
  days: 1,
  price: 299
}]


export function getDeliveryId(deliveryOptions,cartItem) {
  let delivery;
  const deliveryId = cartItem.deliveryOptionId
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryId) {
      delivery = option
    }
    
  });
 return delivery || delivery[0]
}

function isWeekend(date){
  const dayofWeek = date.format('dddd');
  return dayofWeek === 'Saturday'|| dayofWeek === 'Sunday'
}

export function calculateDate(delivery){
  let remainingDays = delivery.days;
  let deliverydate = dayjs();
  
  while (remainingDays > 0){
    deliverydate = deliverydate.add(1,'day')
    if (!isWeekend(deliverydate)){
      remainingDays --;
    }
  }
  return deliverydate;
}

