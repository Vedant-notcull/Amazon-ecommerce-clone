class Car{
  brand;
  model;
  speed =0;
  istrunkOpen = false;
  
  constructor(productinfo){
    this.brand = productinfo.brand
    this.model = productinfo.model
  }
  
  
  trunkOpen(){
    this.istrunkOpen= true;
  }
  trunkclosed(){
    this.istrunkOpen=false
  }
  go(){
    this.speed += 5
  };
  brake(){
    this.wpeed -= 5
  };
  displayinfo(){
    const trunk = this.istrunkOpen ? 'open': 'close'
    console.log(
    this.brand,
    this.model,
    this.speed,
    trunk)
  };
}

class Racecar extends Car{
  acceleration ;
  
  constructor(producinfo){
    super(producinfo);
    this.acceleration = producinfo.acceleration;
    
  };
  displayinfo(){
    console.log(
      this.brand, 
      this.model,
      this.speed
    )
  }
  go(){
    this.speed += this.acceleration
  }
  
}

const racecar = new Racecar({
  brand: 'Mclaren',
  model: 'F10',
  acceleration : 20
})

racecar.go() ;racecar.go()
racecar.displayinfo()

 const car = new Car({
  brand: 'toyota',
  model: 'model 1000',
})

const car2 = new Car({
  brand: 'suzuki',
  model: 'model 2000',

})



/* 
car.trunkOpen()
car.displayinfo()
console.log('hello')
car2.displayinfo()
 */
 car.go()
 car.displayinfo()
