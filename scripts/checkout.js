import {ui} from '/scripts/check-out /product-part.js'
import {paymentUi} from '/scripts/check-out /money-part.js'
import {loadProductsFetch} from '/scripts/products.js'

async function checkout() {
  await loadProductsFetch();
  ui();
  paymentUi();
}
checkout();




