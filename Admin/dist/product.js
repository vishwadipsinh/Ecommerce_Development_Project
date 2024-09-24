let tr = '<option>--Select Category--</option>';

// to Get Category
const getCategory = () => {
    let allCat = JSON.parse(localStorage.getItem('catInfo'))
    allCat.map((i) => {
        tr += `<option value=${i.id}>${i.name}</option>`;
    })

    document.getElementById("catid").innerHTML = tr;
}

getCategory()


let prData = [];


// for Saving Product
const saveproduct = () => {
    let addPrData = JSON.parse(localStorage.getItem("productInfo"))
    let len = (addPrData != null) ? addPrData.length + 1 : 1;
    let pname = document.productfrm.pname.value;
    let price = document.productfrm.price.value;
    let catid = document.productfrm.catid.value;
    let image = localStorage.getItem('catImage');
    let obj = {
        id: len,
        pname: pname,
        image: image,
        price: price,
        catid: catid
    }

    prData = [
        ...prData, obj
    ]
    //prData.push(obj)
    // console.log(prData);

    localStorage.setItem("productInfo", JSON.stringify(prData))
    document.getElementById('dispImg').src = ''

    disp()
}



// to Display
const disp = () => {
    let addPrData = JSON.parse(localStorage.getItem("productInfo"))
    let allCat = JSON.parse(localStorage.getItem('catInfo'))

    let pr = '';

    // addPrData.map((i)=>{
    //     allCat.map((j)=>{
    //         if(j.id == i.catid){
    //             i.catname = j.name
    //         }
    //     })
    // })

    addPrData.map((i) => {
        allCat.map((j) => {
            if (j.id == i.catid) {
                i.catname = j.name
            }
        })
        pr += `
                <tr>
                    <td>${i.id}</td>
                    <td>${i.pname}</td>
                    <td><img src="${i.image}" height="50px"  width="50px"/></td>
                    <td>${i.catname}</td>
                    <td>${i.price}</td>
                    <td><button class="btn btn-info" onclick="editData(${i.id})">Edit</button></td>
                    <td><button class="btn btn-info" onclick="deleteData(${i.id})">Delete</button></td>
                </tr>
            `
    })
    document.getElementById("productdata").innerHTML = pr
}



const editData = (id) => {
    let alldata = JSON.parse(localStorage.getItem("productInfo"))
    let arr = alldata.find((i) => {
        return i.id == id;
    })
    document.productfrm.catid.value = arr.catname
    document.productfrm.pname.value = arr.pname
    document.productfrm.price.value = arr.price
    document.getElementById('dispImg').src = arr.image
    document.getElementById('productid').value = arr.id

}



// Preview of Image
const saveImgUrl = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('dispImg');
        output.src = reader.result;
        localStorage.setItem('catImage', reader.result)
    };

    reader.readAsDataURL(event.target.files[0]);
}

disp()