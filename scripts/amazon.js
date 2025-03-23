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
    <div class="add-to-cart"> <button> Add to Cart</button>
    </div>
    </div>

  `
})