const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

//DISPLAY increment on the cart
let cartCount = document.getElementById('cart_count');
let cartBtns= document.querySelectorAll('.add-cart');


console.log(cartBtns);
 //let car= document.querySelector('.food-box');

 let item = [];
 let allproducts = [];

cartBtns.forEach((cartBtns,index)=>{

  cartBtns.addEventListener('click',function(){
    cartCount.innerHTML =parseInt(cartCount.innerHTML) +1;

    let Title = cartBtns.parentElement.querySelector('.food-title').innerHTML;
    let price = cartBtns.parentElement.querySelector('.food-price').innerHTML;
    let img = cartBtns.parentElement.querySelector('.food-img').src;
    // qty = cartBtns.parentElement


    let found = item.find((e)=>e.title== Title);

    let foodBox =  {
        "title" : Title,
        "price": price,
        "img": img,
        "qty": 1,
    }
 
     //Check Product already Exist in Cart
 if(found){
    function titleFindIndex(itm){
            return itm.title == Title;
    }
    //  console.log(item);
    foundIndex = item.findIndex(titleFindIndex) ;

    item[foundIndex].qty += 1;
    // console.log(foundIndex);
    
 }else{
  let foodBox =  {
    "title" : Title,
    "price": price,
    "img": img,
    "qty": 1,
}

//  console.log("if not found push obj");

  item.push(foodBox);
 }

 ViewCart();


//  show inner html here
 function ViewCart() {

     const cartcontent=document.querySelector('.cart-content');

     cartcontent.innerHTML = "";


    for (let i = 0; i < item.length; i++) {
       const Title = item[i].title;
       const price = item[i].price;
       const img = item[i].img;
       const qty = item[i].qty;

       let div =document.createElement('div');

       div.innerHTML= `
       <div class="cart-box">
       <img src="${img}" class="cart-img">
       <div class="detail-box">
         <div class="cart-food-title">${Title}</div>
         <div class="price-box">
           <div class="cart-price">${price}</div>
            <div class="cart-amt">${qty}</div>
        </div>
         <input type="number" value="1" class="qty">
       </div>
       <ion-icon name="trash" class="cart-remove"></ion-icon>
     </div>`;

cartcontent.appendChild(div);
    
   }console.log(item)
    
 }
//  function Addtocart() {
    
//    div.innerHTML= `
//     <div class="cart-box">
//     <img src="${img}" class="cart-img">
//     <div class="detail-box">
//       <div class="cart-food-title">${Title}</div>
//       <div class="price-box">
//         <div class="cart-price">${price}</div>
//          <div class="cart-amt">${qty}</div>
//      </div>
//       <input type="number" value="1" class="qty">
//     </div>
//     <ion-icon name="trash" class="cart-remove"></ion-icon>
//   </div>
//     `
//  }


  });

});




