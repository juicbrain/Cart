const cart = [];

const DATA = [
  {
    items: "bag",
    price: 200000000,
    qt: 1
  },
  {
    items: "phone",
    price: 2070000,
    qt: 1
  },
  {
    items: "shoe",
    price: 7000000,
    qt: 1
  },
  {
    items: "fan",
    price: 34000000,
    qt: 1
  },
];

document.querySelector(".items") && document.querySelector(".items");

if (document.querySelector(".items")) {
  document.querySelector(".items").innerHTML = DATA.map(function (val, ind) {
    return `
        <div class="card">
        <p>${val.items}</p>
            <p>${val.price}</p>
            <button class="add">add to cart</button>
            </div>
        `;
  });

  const add = document.querySelectorAll(".add");

  for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click", function (e) {
      const p1 = e.target.parentNode.children[0].innerHTML;
      const p2 = e.target.parentNode.children[1].innerHTML;

      const info = DATA.filter((val) => {
        return val.items === p1;
      });

      const doExist = cart.filter((val, ind) => {
        if (val === info[0]) {
          cart[ind].qt += 1
          return val;
        }
      })

      if (doExist.length === 0){
        cart.push(info[0]);
      }

      console.log(cart);
      console.log(doExist);

      genDta();
    });
  }
}

if (document.querySelector(".cart")) {
  genDta();
}

function genDta() {
  let qt = 0;
  let tAmount = 0;

  cart.forEach(val => {
    qt += val.qt;
  //  for (let i = 0; i < val.qt; i++) {
    // tAmount += val.price
    tAmount += val.price * val.qt;
  //  }
  })

  document.querySelector(".cartNum").innerHTML = `cart ${qt}`
  document.querySelector(".cartTotalPrice").innerHTML = `TP ${tAmount}`

  document.querySelector(".cart").innerHTML = cart.map(function (val, ind) {
    return `
          <div class="cart_card">
              <p>${val.items}</p>
              <p>${val.price}</p>
              <p>quantity ${val.qt}</p>
          </div>
          `
  });
}
