function imgChanger(img) {
  document.querySelector(".mainImg").src = img;
}

let counterButton = document.querySelectorAll(".counter");
let count = document.getElementById("count");

const buttonArr = Array.from(counterButton);
let countVal = 0;

buttonArr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let identity = e.target.classList;

    if (identity.contains("less") && countVal > 0) {
      countVal--;
    } else if (identity.contains("more")) {
      countVal++;
    } else {
      return;
    }

    count.innerHTML = countVal;
  });
});

let cartIcon = document.querySelector(".cartWrapper img");
let addToCart = document.querySelector("#addToCart");
let cartSpan = document.querySelector(".cartWrapper span");

addToCart.addEventListener("click", function () {
  cartSpan.classList.add("cartSpan");
});

let sizes = document.querySelectorAll("sizes");

console.log(counterButton);
console.log(count);
