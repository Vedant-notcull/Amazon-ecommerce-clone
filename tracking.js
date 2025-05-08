let order = 50
deliveryStatus()


function deliveryStatus(){
if (order >= 0 && order <= 49 ){
  document.querySelector('.prep').classList.add('green')
}else if (order >= 50 && order <= 99) {
  document.querySelector('.prep').classList.remove('green')
  
  document.querySelector('.ship').classList.add('green')
}else if (order >= 100 ){
  document.querySelector('.ship').classList.remove('green')
  
  document.querySelector('.delvry').classList.add('green')
};
}