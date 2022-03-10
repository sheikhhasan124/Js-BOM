let productContainer = document.getElementById('product-container')

const addItem=()=>{
    let productName = document.getElementById('product-name');
    let productValue = productName.value;
    if(!productValue){
        return;
    }
    // console.log(productValue)
    // display product
    displayProduct(productValue)
    // add localstora
    addToLocaStorage(productValue)
    productName.value = '';
}
const displayProduct = (product)=>{
    
    let li = document.createElement('li');
    li.innerText = product;
    productContainer.appendChild(li)
}
// check localstorage either it has or nor
const gerCurt=()=>{
    let cart= localStorage.getItem('item');
    let presentCart;
    if(cart){
        presentCart=JSON.parse(cart)
    }else{
        presentCart = {}
    }
    return presentCart;
}
const addToLocaStorage=(product)=>{
    let cart = gerCurt();
      if(cart[product]){
        cart[product] = cart[product] + 1;
      }else{
        cart[product] = 1;
      }
    let setProduct = JSON.stringify(cart)
   localStorage.setItem('item',setProduct)
}


const placeOrder = ()=>{
   productContainer.textContent = '';

}