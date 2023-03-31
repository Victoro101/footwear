const search = document.querySelector(".search");
const productList = document.querySelector("products");
const allProducts = document.querySelectorAll(".products>div");
const productsName = document.querySelectorAll(".products>div>div>p:first-child");
// console.log(allProducts);
for (let i = 0; i < productsName.length; i++) {

    let match = allProducts[i].querySelectorAll(".products>div>div>p:first-child")[i];
    if (match) {
        let textvalue = match.textContent || match.innerHTML;
        if (textvalue.indexOf(search) > -1) {
            allProducts.style.display = "";
        } else {
            allProducts.style.display = "none";
        }
    }

}
