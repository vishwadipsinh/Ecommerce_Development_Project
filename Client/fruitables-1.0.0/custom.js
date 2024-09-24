// RV

let tr = `<li class="nav-item">
    <a class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
        <span class="text-dark" style="width: 130px;">All Products</span>
    </a>
</li>`;

let catData = JSON.parse(localStorage.getItem("catInfo"));
let prData = JSON.parse(localStorage.getItem("productInfo"));
let j = 2;
catData.map((i) => {
  tr += `<li class="nav-item">
    <a class="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-${j++}">
        <span class="text-dark" style="width: 130px;">${i.name}</span>
    </a>
</li>`;
});

document.getElementById("catList").innerHTML = tr;

let pr = `
<div id="tab-1" class="tab-pane fade show p-0 active">
    <div class="row g-4">
        <div class="col-lg-12">
            <div class="row g-4">`;
prData.map((t) => {
  pr += ` <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="rounded position-relative fruite-item">
                        <div class="fruite-img">
                            <img src="${t.image}" class="img-fluid w-100 rounded-top" alt="">
                        </div>
                        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${t.pname}</div>
                        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>${t.pname}</h4>

                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">${t.price}/ kg</p>
                                <button onclick="addToCart(${t.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>`;
});

pr += `</div>
        </div>
    </div>
</div>
`;

let k = 2;
let prInformation = JSON.parse(localStorage.getItem("productInfo"));
catData.map((i) => {
  pr += `<div id="tab-${k++}" class="tab-pane fade show p-0">
    <div class="row g-4">
        <div class="col-lg-12">
            <div class="row g-4">`;

  prInformation.map((j) => {
    if (i.id == j.id) {
      pr += `<div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="rounded position-relative fruite-item">
                        <div class="fruite-img">
                            <img src="${j.image}" class="img-fluid w-100 rounded-top" alt="">
                        </div>
                        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
                        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>${j.pname}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">${j.price} &#8377</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
  });

  pr += `</div>
        </div>
    </div>
</div>`;
});

document.getElementById("prList").innerHTML = pr;
