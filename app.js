// alert("yup");
// gsap.from('nav', {
//     scrollTrigger: {
//         trigger: 'nav',
//     }, duration: .9, y: '-110%', ease: 'power1',
// })












//swiper animations starts here
// const swiper = Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     autoplay:{
//         delay:2500,
//         disableOnInteraction: false,
//     },
//     // loopFillGroupWithBlank: false,
//     // slidesOffsetAfter: 0,
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: 'true',
       
       

//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });




















const countdown = () => {
    const countDate = new Date('december1, 2022 00:00').getTime();
    // console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;





    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;




    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    // console.log(textDay);
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
    // console.log(gap);

};
setInterval(countdown, 1000);
//menu bar toggle
var openMenuBar = document.querySelector("#menuOpen");
var closeMenuBar = document.querySelector("#menuClose");
var allNavLinks = document.querySelectorAll(".navLinks>a");
var navLinks = document.querySelector(".navLinks");
var width1 = window.matchMedia("(max-width:1024px)");
var links = document.querySelectorAll("li>a");

closeMenuBar.addEventListener("click", function () {
    navLinks.style.display = 'none';
    closeMenuBar.style.display = "none";
    openMenuBar.style.display = "flex";

})
openMenuBar.addEventListener("click", function () {
    navLinks.style.display = 'block';

})
openMenuBar.addEventListener("click", function () {
    closeMenuBar.style.display = "flex";
    openMenuBar.style.display = "none";
})
allNavLinks.forEach(element => {
    element.addEventListener("click", function () {
        navLinks.style.display = "none";
    })
});
// closeMenuBar.addEventListener("click", function () {
//     navLinks.style.transform = 'scaleX(0)';
// })
// if (width1.matches) {
//     links.forEach(el => {
//         el.addEventListener("click", function () {
//             navLinks.style.transform = 'scaleX(0)';
//         })
//     });
// } else {
//     removeEventListener;
// }







var slideImg = document.getElementById("slides");
var images = new Array(
    "currentImages/pngegg (11).png",
    "currentImages/pngegg (5).png",
    "currentImages/pngegg (10).png",
    "currentImages/pngegg (12).png",
    "currentImages/pngegg (6).png",
    "currentImages/pngegg (7).png",
    "currentImages/pngegg (8).png",
    "currentImages/pngegg (4).png",
);
var len = images.length;
var i = 0;
function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 2000);
}
slider();

// upper slider
var vSlider = document.querySelector("#videoSlide");
var videos = new Array(
    "Dancer wearing Flamenco shoes.mp4",
)
var vLen = videos.length;
var j = 0;

function vSlide() {
    if (j > vLen - 1) {
        j = 0;
    }
    vSlider.src = images[j];
    j++;
}
// swiper.js
// const swiper = new Swiper('.main2 .swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: 'true',
//         // hide: 'true',
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: 'true',
//     },
// });



/* <script type="text/javascript"> */
// function toggle() {
// var blur = document.getElementById('blur');
// blur.classList.toggle('drive');
// var popup = document.getElementById('popup');
// popup.classList.toggle('drive');

// }



// const buy = document.querySelectorAll(".btn");
// const price = document.querySelector(".price");
// const productName = document.querySelector(".nameSpace");
// const productImg = document.querySelector(".imgSpace");
// const popup = document.querySelector(".modalPopup");
// const closePopup = document.querySelector(".fa-circle-xmark");
// const sectionClick = document.querySelector(".boxSection");
// const iconSpace = document.querySelector(".colorSpace");
// const boxSection = document.querySelector("#thirdSection");
// const confirmButton = document.querySelector("#confirm");
// const paymentCheck = document.querySelector("#check").value;
const body = document.querySelector('body');

// // const allProductImage=document.querySelector(".img");

// buy.forEach(function (el, i) {
//     el.addEventListener("click", function () {
//         console.log(this.dataset);
//         popup.style.transform = 'scale(1)';
//         productImg.src = this.dataset.img;
//         price.innerHTML = this.dataset.price;
//         productName.innerHTML = this.dataset.name;
//         // boxSection.style.filter = 'blur(4px)';
//         // iconSpace.innerHTML = this.dataset.icon;
//     })
// });
// closePopup.addEventListener("click", () => {
//     popup.style.transform = 'scale(0)';
//     // boxSection.style.filter = 'blur(0)';
// })




//cart javascript
let cartButton=document.querySelectorAll(".cart");
let cartClickOpen = document.querySelector(".navButton>li");
let cartSection = document.querySelector(".cartSection");
let cartClose = document.querySelector(".fa-left-long");

let removeAddedCart = document.querySelectorAll("#removeCart");
let addedCart = document.querySelectorAll(".addedCart");
let cartItemNumber=document.querySelector("sup input");
let cartSuccess=document.querySelector(".cartSuccess");
let cartSuccessClose=document.querySelector(".cartSuccess i");
cartButton.forEach(function (el,i) {
   
    // cartButton.type='button';
    el.addEventListener("click",function () {   
        let prevEl = this.previousElementSibling;
        let name = prevEl.dataset.name;
        let img = prevEl.dataset.img;
        let price = prevEl.dataset.price.slice(1);
        addingCart(name,price,img);
        // console.log(name,img,price);
        cartItemNumber.value=Number(cartItemNumber.value)+1;
        cartSuccess.style.display="flex";
        setTimeout(()=>{
            cartSuccess.style.display="none";
        }, 1500)
        // cartItemNumber=cartItemNumber.value+1;
        console.log(cartItemNumber.value);
        if (el.disabled=true) {
            
            el.style.cursor="not-allowed";
            el.style.background="#3c3c3c60";
            
        }
    } );
    cartSuccessClose.onclick=function () {
        cartSuccess.style.display="none";
    }
    // totalPrices()

});
 
    



cartClickOpen.onclick = function () {
    cartSection.style.display = 'block';
    cartSection.style.overflowY='scroll';
    body.style.overflowY = 'hidden';
    totalPrices(i);
    
   
    // cartClickOpen.onclick = function () {
    //     cartSection.style.display = 'none';
    //     body.style.overflow = 'scroll';
    // }
}
cartClose.onclick = function () {
    cartSection.style.display = 'none';
    body.style.overflow = 'scroll';
}

removeAddedCart.forEach(function (element, i) {
    element.addEventListener("click", () => {
        addedCart[i].style.display = "none";
    })

});









function addingCart(name,price,imageSrc) {
    var cartRow=document.createElement("div");
    // cartRow.classList.add('addedCart');
    // var name=document.getElementsByClassName("nameProduct")[0].textContent;
    // var price=document.getElementsByClassName("namePrice")[0].textContent;
    // var imageSrc=document.getElementsByClassName("imageProduct");
    
    var miniCartSection=document.querySelector(".addedCart");
//     var cartQuantityAdding = document.querySelectorAll("#increase ");
// var cartQuantityMinus = document.querySelectorAll("#minus");
// var cartQuantitySpace = document.querySelectorAll("#quantitySpace");
    // var fff=price.dataset.price;
    
    var cartRowContents=`<div class="imgQuantity">
    
    
               
    <div>
    <img src="./currentImages/${imageSrc}" alt="" width="100px" height="100px">
    
    
    </div>
    <div class="cartIcons">
    <i class="fas fa-circle-plus" 
    onclick="increase(this)" id="increase"></i>
    <input placeholder=" " value="1" id="">
    <i class="fas fa-minus"onclick="decrease(this)" id="quantitySpace"></i>
    <i class="fas fa-circle-xmark" id="removeCart"></i>
   </div>
   </div>
   <div class="prodName">
   
   
   <p class="nameProduct">${name}</p>
   <p class="namePrice" data-price="${price}" >₦<span>${price}</span></p>

</div>
`;
    
   cartRow.innerHTML=cartRowContents;
    console.log("cart");
    miniCartSection.append(cartRow);
    totalPrices();
    
}

























//cart increment and decrement
var cartQuantityAdding = document.querySelectorAll("#increase ");
var cartQuantityMinus = document.querySelectorAll("#minus");
var cartQuantitySpace = document.querySelectorAll("#quantitySpace");
var namePrice=document.querySelectorAll(".namePrice  span");

var totalCartPrice=document.querySelector("#realCheck");

// cartQuantityMinus.forEach(function (el, i) {
//     el.addEventListener("click", function(){
//         minusCartQuantity(i)
//         console.log("minus");
//         totalPrices(i);
//     })
// });
// cartQuantityAdding.forEach(function (el, i) {
//     el.addEventListener("click", function(){
//         console.log("adding");
//         addingCartQuantity(i)
//         totalPrices(i);
//     })
// });

function increase(el) {
    let me = el;
    let quantity = me.nextElementSibling;
    // ++quantity.value;
    let currentQuantity = quantity.value;
    quantity.value = ++currentQuantity;
    // console.log(currentQuantity);
}
function decrease(el) {
    let me = el;
    let quantity = me.previousElementSibling;
    // --quantity.value;
    let currentQuantity = quantity.value;
    if ( --currentQuantity < 1 ) return
    quantity.value = currentQuantity;
    // console.log(currentQuantity);
}

// function addingCartQuantity(me) {
//     // let space = me.nextSibling.nextSibling
//     // console.log(space.value);
//     // space.value++;
    
//     var namePrice=document.querySelectorAll(".namePrice span");
//     cartQuantitySpace.forEach((el,i)=>{
//         if(me == i){
//             el.value++;
            
//             namePrice[i].textContent= Number(namePrice[i].dataset.price) * cartQuantitySpace.value+".00";
            
//             // let newPrice = namePrice[i]  

//         }
//         console.log("adding");
//         console.log(namePrice);
        
//     // console.log(totalCartPrice);
//     })
//     // cartQuantitySpace[i].value = Number(cartQuantitySpace[i].value) + 1;

// }

// function minusCartQuantity(me) {
    
//     var namePrice=document.querySelectorAll(".namePrice span");
//     console.log("clicking");
//     // console.log(namePrice);
//     // for (let i = 0; i < cartQuantitySpace.length; i++) {
//         // let space = me.previousSibling.previousSibling
//         // space.value--;
        
//         cartQuantitySpace.forEach((el,i)=>{
//             if(me == i){
//                 if (cartQuantitySpace[i].value > 1) {
//                     el.value --;
//                     namePrice[i].textContent= Number(namePrice[i].dataset.price) * cartQuantitySpace.value+ ".00";
//                     console.log(namePrice[i].dataset.price);
//                     // namePrice="$" + namePrice.textContent * cartQuantitySpace[i].value;
//                     // namePrice=namePrice.replace("$"," ");
//                     // console.log(namePrice);
//                 }
//             }
//             totalPrices();
//         })
    
//     }



//for total price functions
function totalPrices() {
    let total=0
    let button=document.getElementsByClassName("btn");
    let namePrice=document.querySelectorAll(".namePrice span");
            total += Number(button.dataset.price.slice(1)) * cartQuantitySpace.value;
    totalCartPrice.textContent= "₦"+total.toLocaleString('en-US');
    
//     for (let i = 0; i < addedCart.length; i+=1) {
// console.log(namePrice[i].dataset.price);
// console.log(total);
// // console.log(cartQuantitySpace.value);
// }
// console.log(addedCart.length);
}

