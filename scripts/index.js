//store the products array in localstorage as "products"
let add_product = document.querySelector("#add_product");
add_product.addEventListener("click", addFunc)
let objArr = JSON.parse(localStorage.getItem("products")) || [];
function addFunc() {

    event.preventDefault()
    var data = {
        type : document.querySelector("#type").value,
        desc : document.querySelector("#desc").value,
        price : document.querySelector("#price").value,
        image : document.querySelector("#image").value
    }
  objArr.push(data)
  localStorage.setItem("products",JSON.stringify(objArr));


}
let show_products = document.querySelector("#show_products");
show_products.addEventListener("click",showFunc)

function showFunc(){
    window.location.href = "./inventory.html";
}