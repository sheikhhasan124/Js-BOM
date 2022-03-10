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
const addToLocaStorage=(product)=>{
   localStorage.setItem('item',product)
}


const placeOrder = ()=>{
   productContainer.textContent = '';

}