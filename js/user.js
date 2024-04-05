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