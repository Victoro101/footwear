const buy = document.querySelectorAll(".btn");
const price = document.querySelector(".price");
const productName = document.querySelector(".nameSpace");
const productImg = document.querySelector(".imgSpace");
const popup = document.querySelector(".modalPopup");
const closePopup = document.querySelector(".fa-circle-xmark");
const sectionClick = document.querySelector(".boxSection");
const iconSpace = document.querySelector(".colorSpace");
const boxSection = document.querySelector("#thirdSection");
const confirmButton = document.querySelector("#confirm");
const paymentCheck = document.querySelector("#check").value;
// const allProductImage=document.querySelector(".img");

buy.forEach(function (el, i) {
    el.addEventListener("click", function () {
        // console.log(this.dataset);
        popup.style.transform = 'scale(1)';
        boxSection.style.filter = 'blur(4px)';
        productImg.src = this.dataset.img;
        price.innerHTML = this.dataset.price;
        productName.innerHTML = this.dataset.name;
        // iconSpace.innerHTML = this.dataset.icon;
    })
});
closePopup.addEventListener("click", () => {
    popup.style.transform = 'scale(0)';
    boxSection.style.filter = 'blur(0)';
})
// confirmButton.onclick = function name(params) {
    // popup.style.transform = 'scale(0)';
    // boxSection.style.filter = 'blur(0)';

// }
// sectionClick.addEventListener("click", () => {
//     popup.style.transform = 'scale(0)';
// })
