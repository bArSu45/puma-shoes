let objArr = JSON.parse(localStorage.getItem("products")) || [];

objArr.forEach(function(ele,index){
    let all_products = document.querySelector("#all_products");

    let container = document.createElement("div");
    container.setAttribute("id","container")

    let image = document.createElement("img");
    image.src = ele.image;

    let type = document.createElement("h3");
    type.innerText = ele.type;

    let desc = document.createElement("p");
    desc.innerText = ele.desc;

    let price = document.createElement("h5");
    price.innerText = ele.price;

    let remove_button = document.createElement("button");
    remove_button.innerText = "Remove";
    remove_button.addEventListener("click",function(){
        removeFunc(ele,index);
    })

    container.append(image,type,desc,price,remove_button);
    all_products.append(container);
})

function removeFunc(ele,index)
{
    objArr.splice(index,1)
    localStorage.setItem("products",JSON.stringify(objArr))
    window.location.reload();
}

let add_more_product = document.querySelector("#add_more_product");
add_more_product.addEventListener("click",moreFunc)

function moreFunc(){
    window.location.href = "./index.html"
}

