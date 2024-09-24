let tr=``;
let cart=JSON.parse(localStorage.getItem('cartData'));
cart.map((i)=>{
    tr+=`<tr>
            <th scope="row">
                        <div class="d-flex align-items-center">
                            <img src="${i.image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
                        </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4">${i.pname}</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">${i.price}/-</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4" style="width: 100px;">
                                    <p class="mb-0 mt-4">${i.qty}</p>
                                    </div>
                                </td>
                            </tr>`;
})
document.getElementById('showcart').innerHTML=tr;