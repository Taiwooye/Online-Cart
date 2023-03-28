const btnCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");

btnCart.addEventListener("click", () => {
  cart.classList.toggle("cart-active");
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

//DISPLAY increment on the cart
let cartCount = document.getElementById("cart_count");
let cartBtns = document.querySelectorAll(".add-cart");

//let car= document.querySelector('.food-box');

let item = [];
let allproducts = [];

cartBtns.forEach((cartBtns, index) => {
  cartBtns.addEventListener("click", function () {
    cartCount.innerHTML = parseInt(cartCount.innerHTML) + 1;

    let Title = cartBtns.parentElement.querySelector(".food-title").innerHTML;
    let price = cartBtns.parentElement.querySelector(".food-price").innerHTML;
    let img = cartBtns.parentElement.querySelector(".food-img").src;
    // qty = cartBtns.parentElement

    let found = item.find((e) => e.title == Title);

    let foodBox = {
      title: Title,
      price: price,
      img: img,
      qty: 1,
    };

    //Check Product already Exist in Cart
    if (found) {
      function titleFindIndex(itm) {
        return itm.title == Title;
      }
      foundIndex = item.findIndex(titleFindIndex);

      //adding to the qauntity of cart
      item[foundIndex].qty += 1;
    } else {
      let foodBox = {
        title: Title,
        price: price,
        img: img,
        qty: 1,
      };

      item.push(foodBox);
    }

    listCart();
  });
});

function listCart() {
  const cartcontent = document.querySelector(".cart-content");
  const btn_remove = document.getElementsByClassName("cart-remove");

  cartcontent.innerHTML = "";
  for (let i = 0; i < item.length; i++) {
    let div = document.createElement("div");
    const Title = item[i].title;
    const price = item[i].price;
    const img = item[i].img;
    let qty = item[i].qty;

    div.innerHTML = `
        <div class="cart-box">
        <img src="${img}" class="cart-img">
        <div class="detail-box">
          <div class="cart-food-title">${Title}</div>
          <div class="price-box">
            <div class="cart-price">${price}</div>
            <button class="butt-increase">+</button>
            <div class="cart-amt">${qty}</div>
            <button class="butt-decrease">-</button>
        </div>
        
        </div>
        <ion-icon name="trash" class="cart-remove" id="cart-remove"></ion-icon>
      </div>`;

    cartcontent.appendChild(div);

    btn_remove[i].onclick = function () {
      item.splice(i, 1);
      listCart();
    };
  }

  const btn_increment = document.querySelectorAll(".butt-increase");
  const btn_decrement = document.querySelectorAll(".butt-decrease");

  btn_increment.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      item[index].qty += 1;
      listCart();
    });
  });

  btn_decrement.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (item[index].qty <= 0) {
        item[index].qty = 0;
      } else {
        item[index].qty -= 1;
      }
      listCart();
    });
  });

  let total = 0;

  total = item.reduce((acc, item) => {
    //remove dollar sign
    let price = item.price.substring(1, item.price.length);
    //Return: mutiply (price * quantity) and add total to accumulator;
    return (acc += parseInt(price * item.qty));
  }, total);

  tagTotal = document.getElementById("total-price");
  tagTotal.innerText = `$ ${total}`;
}
