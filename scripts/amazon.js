products.forEach((item) => {
  document.querySelector('.item-layout')
    .innerHTML += `
    <div class="item-box">
     <div class="item-img">
      <img src="${item.image}"/>
     </div>
     
    <nav class="item-info">
     <div class="item-name">
      ${item.name}
     </div>
     
     <div class="item-rating">
      <div class="rating-img">
       <img src="/images/rating/rating-${item.rating.stars *10}.png" >
      </div>
      <div class="rating-number">${item.rating.count}</div>
     </div>
     
     <div class="price-box">
     ${item.price}
     </div>
     <div class="quantity-box">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">44</option> 
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
     </div>
    </nav>
    <div class="add-to-cart">
    <button class="cart-btn" 
    data-item-id ="${item.productid}"> Add to Cart</button>
    </div>
    </div>

  `
});



let cart = [];
  
 function attach(){
  document.querySelectorAll('.cart-btn').forEach((button)=>{
  // looping through each buttons and onlcick event
    let matching;
    button.addEventListener('click',()=>{
      const itemId = button.dataset.itemId
    
//looping thorough cart to check same item  
     cart.forEach((product)=>{
      if(itemId  === product.itemId){
        matching = product  }
        })
    
//updating the quantity to increase in variable matching quantity 
    if (matching) {
      matching.quantity += 1
    }else{
      cart.push({
        itemId: itemId,
        quantity: 1
      })
    }
   
// makes the cart logo up interatcive
    let cartQuantity = 0;
    cart.forEach( (item)=>{
      cartQuantity += item.quantity
    })
    
    document.querySelector('.cart-quantity').innerHTML = cartQuantity
    });
    
  //event listner end
  })
  }
  
  attach()
  
  
  