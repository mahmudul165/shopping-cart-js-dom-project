function plusButton(x, y) {
  const plusInput = parseInt(document.getElementById(x).value);
  document.getElementById(x).value = plusInput + 1;
  const pIn = parseInt(document.getElementById(x).value);
  const price = parseFloat(document.getElementById(y).innerText);
  if (price >= 1219) {
    document.getElementById(y).innerText = 1219 * pIn;
  } else {
    document.getElementById(y).innerText = 59 * pIn;
  }
}
function minusButton(x, y) {
  const minusInput = parseInt(document.getElementById(x).value);
  document.getElementById(x).value = minusInput - 1;
  const pIn = parseInt(document.getElementById(x).value);
  const price = parseFloat(document.getElementById(y).innerText);
  if (price >= 1219) {
    document.getElementById(y).innerText = 1219 * pIn;
  } else {
    document.getElementById(y).innerText = 59 * pIn;
  }
}

//1st part
document.getElementById("plus-1").addEventListener("click", function (event) {
  plusButton("value-1", "price-1");
  subTotal();
});
document.getElementById("minus-1").addEventListener("click", function (event) {
  const minusInput = parseInt(document.getElementById("value-1").value);
  if (minusInput > 0) {
    minusButton("value-1", "price-1");
    subTotal();
  }
});
//2nd part
document.getElementById("plus-2").addEventListener("click", function (event) {
  plusButton("value-2", "price-2");
  subTotal();
});
document.getElementById("minus-2").addEventListener("click", function (event) {
  const minusInput = parseInt(document.getElementById("value-2").value);
  if (minusInput > 0) {
    minusButton("value-2", "price-2");
    subTotal();
  }
});
function subTotal() {
  document.getElementById("sub-total").innerText =
    parseInt(document.getElementById("price-1").innerText) +
    parseInt(document.getElementById("price-2").innerText);
  document.getElementById("tax").innerText =
    parseFloat(document.getElementById("sub-total").innerText) * 0.03;
  document.getElementById("total").innerText =
    parseFloat(document.getElementById("sub-total").innerText) +
    parseFloat(document.getElementById("tax").innerText);
}
document
  .getElementById("delete-item-1")
  .addEventListener("click", function (event) {
    document.getElementById("cart-item-1").style.display = "none";
  });
document
  .getElementById("delete-item-2")
  .addEventListener("click", function (event) {
    document.getElementById("cart-item-2").style.display = "none";
  });
