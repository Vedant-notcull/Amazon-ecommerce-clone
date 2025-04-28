import {ui} from '/scripts/check-out /product-part.js'
import {paymentUi} from '/scripts/check-out /money-part.js'
import {loadProducts} from '/scripts/products.js'

loadProducts( ()=>{
ui();
paymentUi();
})


