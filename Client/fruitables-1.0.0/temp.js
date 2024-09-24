// Rana Vishwadipsinh

let tr = `
    <li class="nav-item">
        <a class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
            <span class="text-dark" style="width: 130px;">All Products</span>
        </a>
    </li>
`;
let allCatData = JSON.parse(localStorage.getItem("catInfo"));
let j = 1;
allCatData.map((i, index) => {
  tr += `
     <li class="nav-item">
        <a class="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-${++j}">
            <span class="text-dark" style="width: 130px;">${i.name}</span>
        </a>
    </li>
    `;
});
document.getElementById("catList").innerHTML = tr;

let allPr = JSON.parse(localStorage.getItem("productInfo"));

let pr = "";
let allCatwisePr = "";

allCatwisePr += `<div id="tab-1" class="tab-pane fade show p-0 active">
<div class="row g-4">
    <div class="col-lg-12">
        <div class="row g-4">`;
allPr.map((j) => {
  allCatwisePr += `<div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                            <img src=${j.image} class="img-fluid w-100 rounded-top" alt="" style="width: 100px; height:300px" />
                            </div>
                            
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                <h4>${j.pname}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div class="d-flex justify-content-between flex-lg-wrap">
                                    <p class="text-dark fs-5 fw-bold mb-0">${j.price} &#8377</p>
                                    <button onclick="addToCart(${j.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
});

allCatwisePr += ` </div>
</div>
</div>
</div>`;

let k = 2;
allCatData.map((i) => {
  allCatwisePr += `<div id="tab-${k++}" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">`;
  allPr.map((j) => {
    if (j.id == i.id) {
      allCatwisePr += `<div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="rounded position-relative fruite-item">
                                                <div class="fruite-img">
                                                <img src=${j.image} class="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                
                                                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>${j.pname}</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div class="d-flex justify-content-between flex-lg-wrap">
                                                        <p class="text-dark fs-5 fw-bold mb-0">$${j.price} &#8377</p>
                                                        <button onclick="addToCart(${j.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
    }
  });

  allCatwisePr += ` </div>
                </div>
            </div>
        </div>`;
});

document.getElementById("prList").innerHTML = allCatwisePr;

let cartData = [];
const addToCart = (id) => {
  let allCartData = JSON.parse(localStorage.getItem("cartData"));
  if (allCartData != null) {
    let checkPrId = allCartData.find((i) => {
      return i.id == id;
    });

    if (checkPrId != undefined) {
      let finalData = allCartData.map((i) => {
        if (i.id == id) {
          i.qty += 1;
        }
        return i;
      });
      localStorage.setItem("cartData", JSON.stringify(finalData));
    } else {
      let productInfo = allPr.find((i) => {
        return i.id == id;
      });

      let obj = {
        cartid: allCartData != null ? allCartData.length + 1 : 1,
        qty: 1,
        id: id,
        pname: productInfo.pname,
        price: productInfo.price,
        image: productInfo.image,
      };
      allCartData.push(obj);
      localStorage.setItem("cartData", JSON.stringify(allCartData));
    }
  } else {
    let productInfo = allPr.find((i) => {
      return i.id == id;
    });

    
    let obj = {
      cartid: allCartData != null ? allCartData.length + 1 : 1,
      qty: 1,
      id: id,
      pname: productInfo.pname,
      price: productInfo.price,
      image: productInfo.image,
    };
    cartData.push(obj);
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }
};
