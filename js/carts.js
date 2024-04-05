let productsInCart =localStorage.getItem("productsInCart")
let allproducts = document.querySelector(".products")
if(productsInCart){
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
}
function  drawCartProducts(products){
    let y = products.map((item)=> {
        return `
         <div class="product_item">
        <img class="product_item_img" src="${item.Imageurl}" alt="">
        <div class="product_item_desc">
         <h2>${item.title}</h2>
         <p>the new air fryre from samsung</p>
         <span>${item.color}</span>
        </div>
<div class="product_item_action">
 <button class="add_to_cart" onCLick="removefromcart(${item.id})">Remove from Cart</button>

</div>
</div>  
 `
    })
    allproducts.innerHTML = y;
} 