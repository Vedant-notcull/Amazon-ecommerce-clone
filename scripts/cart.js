export let cart = [];

// checkMatchingQuantity()
//increases the quantity of new item and matching one as per the user select
export function checkMatchingQuantity(matching, itemId,) {
  const saman = document.querySelector(`.select-quantity-${itemId}`)
  if (matching) {
    matching.quantity += Number(saman.value)
  } else {
    cart.push({
      itemId: itemId,
      quantity: Number(saman.value)
    })
  }
}