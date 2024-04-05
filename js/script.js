// localStorage.setItem("firstcar" , "BMW")  //("key","value")

// console.log(localStorage.getItem("firstcar"))
// localStorage.removeItem("firstcar")

// localStorage.clear()

/////////////////////////////////////


let userinfo =document.querySelector("#user-info")
let userData =document.querySelector("#user")

let links =document.querySelector("#link")
if (localStorage.getItem("username")){
    links.remove()
userinfo.style.display ="flex"
userData.innerHTML =localStorage.getItem("username")
}
let logOutBtn=document.querySelector("#logout")
logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="login.html"
    },1500)
})
///////////////////////////////////////////////////////////////

 let allproducts = document.querySelector(".products")
 let products =[
    {
        id:1,
        title:"air fryer",
        color:"black",
        Imageurl:"image/d1.webp"
    },
    {
        id:2,
        title:"oven",
        color:"silver",
        Imageurl:"image/d2.webp"
    },
    {
        id:3,
        title:"dish washer",
        color:"silver",
        Imageurl:"image/d3.webp"
    },
    {
        id:4,
        title:"clothes washer",
        color:"black",
        Imageurl:"image/d4.webp"
    },
 ]
function drawItems(){
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
 <button class="add_to_cart" onCLick="addToCart(${item.id})">Add to cart</button>
 <i class="far fa-heart fav"></i>
</div>
</div>  
 `
    })
    allproducts.innerHTML = y;
}
drawItems()

let cartproductsDiv =document.querySelector(".carts_products div")
let badge =document.querySelector(".badge")


// let addedItem = [];
let addedItem =localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) :[];

if(addedItem){
    addedItem.map(item=> {
        cartproductsDiv.innerHTML +=`<p> ${item.title}</p>`;
    })
    badge.style.display="block";
    badge.innerHTML =addedItem.length
}






    if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item .id ===id)
            cartproductsDiv.innerHTML += `<p> ${choosenItem.title}</p>`;
            


            addedItem =[...addedItem ,choosenItem]
            localStorage.setItem("productsInCart", JSON.stringify(addedItem))
            let cartProductsLenght =document.querySelectorAll(".carts_products div p")
            // console.log(cartProductsLenght.length)
            badge.style.display="block";
            
            badge.innerHTML =cartProductsLenght.length;
            
            }
    }else{
        window.location="login.html"
    }



//////////////////////////////////////////////////////////////////////

let shoppingcarticon =document.querySelector(".shopping_cart")
let cartPproducts =document.querySelector(".carts_products")
shoppingcarticon .addEventListener("click",opencart)

function opencart (){
  if(cartproductsDiv.innerHTML !=""){

 if(cartPproducts.style.display=="block")  {
    cartPproducts.style.display="none"
 }else{
    cartPproducts.style.display="block"
 }
}
}
////////////////////////////////////////////////////////////////

