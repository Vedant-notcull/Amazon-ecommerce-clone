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