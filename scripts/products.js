class Product{
  productid;
  image;
  name;
  rating;
  price;
  
  extraInfo(){
    return ''
  }
  constructor(productInfo){
  this.productid= productInfo.productid;
  this.image = productInfo.image;
  this.name = productInfo.name;
  this.rating = productInfo.rating;
  this.price = productInfo.price
  }
}

class Clothing extends Product {
  sizeChartLink;
  constructor(productInfo){
    super(productInfo);
    this.sizeChartLink = '/images/clothing-size-chart.png'
  }
  
  extraInfo(){
    return `
  <a href="${this.sizeChartLink}" style="color:blue">size chart </a>
    `
  }
}


export let products = []

export function loadProductsFetch(){
  const promise = fetch(
    'https://vedant-notcull.github.io/Vedant-Backend/product.json'
  ).then((response)=>{
    return response.json()
  }).then((productData)=>{
    products = productData.map((productInfo) => {
      if(productInfo.type==='clothing'){
        return new Clothing(productInfo)
      }
  return new Product(productInfo)
    })
    
  })
  
  return promise 
}

/*

export function loadProducts(fun){
const ved = new XMLHttpRequest();

ved.addEventListener('load', () => {
  products = JSON.parse(ved.response)
  .
fun();
})
ved.open('GET', 'https://vedant-notcull.github.io/Vedant-Backend/product.json')
ved.send();

} */

/*  
export const products = [
  {
    productid: "id1",
    image: "/images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black & Gray athletic Cotton Socks",
    rating: { stars: 4, count: 88 },
    price: "40",
  },
  {
    productid: "id2",
    image: "/images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: { stars: 4.5, count: 275 },
    price: "1500",
  },
  {
    productid: "id3",
    image: "/images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: { stars: 4.5, count: 243 },
    price: "699",
  },
  {
    productid: "id4",
    image: "/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: { stars: 4.5, count: 148 },
    price: "799",
    type : "clothing"
  },
  {
    productid: "id5",
    image: "/images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: { stars: 4, count: 213 },
    price: "289",
  },
  {
    productid: "id6",
    image: "/images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: { stars: 4, count: 51 },
    price: "1199",
  },
  {
    productid: "id7",
    image: "/images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: { stars: 4.5, count: 106 },
    price: "1399",
  },
  {
    productid: "id8",
    image: "/images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: { stars: 4, count: 441 },
    price: "569",
  },
  {
    productid: "id9",
    image: "/images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: { stars: 4.5, count: 7 },
    price: "879",
  },
  {
    productid: "id10",
    image: "/images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent",
    rating: { stars: 4.5, count: 126 },
    price: "99",
  },
  {
    productid: "id11",
    image: "/images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: { stars: 4.5, count: 345 },
    price: "450",
  },
  {
    productid: "id12",
    image: "/images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: { stars: 4, count: 61 },
    price: "399",
  },
  {
    productid: "id13",
    image: "/images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: { stars: 4, count: 361 },
    price: "599",
  },
  {
    productid: "id14",
    image: "/images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: { stars: 4.5, count: 208 },
    price: "300",
  },
  {
    productid: "id15",
    image: "/images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: { stars: 4.5, count: 208 },
    price: "749",
  },
  {
    productid: "id16",
    image: "/images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: { stars: 4, count: 49 },
    price: "399",
  },
  {
    productid: "id17",
    image: "/images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: { stars: 4, count: 89 },
    price: "109",
  },
  {
    productid: "id18",
    image: "/images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: { stars: 4.5, count: 653 },
    price: "400",
  },
  {
    productid: "id19",
    image: "/images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: { stars: 4.5, count: 28 },
    price: "609",
  },
  {
    productid: "id20",
    image: "/images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: { stars: 4.5, count: 28 },
    price: "49",
  }
]
console.log(products)
*/







export function getProduct(itemId) {
  let matchingItem;
  
  products.forEach((product) => {
    if (itemId === product.productid) {
      matchingItem = product
    }
  })
  return matchingItem
}