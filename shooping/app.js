

const addItem=()=>{
    let productName = document.getElementById('product-name');
    let productValue = productName.value;
    console.log(productValue)
    productName.value = '';
}
const displayProduct = ()=>{
    let li = document.createElement('li');
}