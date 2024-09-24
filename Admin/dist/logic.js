let catData = []
const saveData = () => {
    let alldata = JSON.parse(localStorage.getItem("catInfo"))
    let len = alldata != null ? alldata.length + 1 : 1;
    let cname = document.catfrm.catname.value;
    // let cage = document.catfrm.catage.value;
    // let csalary = document.catfrm.catsalary.value;
    let catid = document.catfrm.catid.value;

    if (catid != '') {
        //for update 
        let updatedData = alldata.map((i) => {
            if (i.id == catid) {
                // for checking that after edit if any input filled is empty or not
                if (cname == '' || cname == null) {
                    // if (cname == '' || cage == '' || csalary == '') {
                    alert("Please fill All Details");
                    return i;
                } else {
                    i.name = cname;
                    // i.age = cage;
                    // i.salary = csalary;
                }
            }
            return i;
        })


        
        catData = updatedData;

        // for checking if any input filled is empty or not

    } else if (cname == '' || cname == null) {
        // } else if (cname == '' || cage == '' || csalary == '') {

        alert("Please fill All Details");
        return false;

    }
    else {
        //insert
        let obj = {
            id: len,
            name: cname,
            // age: cage,
            // salary: csalary
        }
        catData.push(obj)
    }

    localStorage.setItem("catInfo", JSON.stringify(catData))

    document.catfrm.catname.value = '';
    // document.catfrm.catage.value = '';
    // document.catfrm.catsalary.value = '';
    document.catfrm.catid.value = '';

    Display()
}



// Function for Display
const Display = () => {
    let alldata = JSON.parse(localStorage.getItem("catInfo"))
    let tr = '';
    if (alldata != null) {
        alldata.map((i) => {
            tr += `
                    <tr>
                        <td>${i.id}</td>
                        <td>${i.name}</td>
                        <td><button onclick="deleteData(${i.id})">Delete</button></td>                   
                        <td><button onclick="editData(${i.id})">Edit</button></td>                   
                    </tr>
            
            `
                // < td > ${ i.age }</td >
                // <td>${i.salary}</td>
        })
        document.getElementById("catdata").innerHTML = tr;

    }
}



// Function for Delete Data
const deleteData = (id) => {
    let alldata = JSON.parse(localStorage.getItem("catInfo"))
    //to update arr 
    //using filter func we can remove id
    let final_res = alldata.filter((i) => {
        return i.id != id
    })
    let j = 1;
    //to change id in sequence 
    let arr = final_res.map((i) => {
        i.id = j++;
        return i;
    })
    localStorage.setItem("catInfo", JSON.stringify(arr))
    Display()
}
//display data for first time
Display()



// Function to Delete All Data
const deleteAllData = () => {
    // clear all data
    localStorage.clear();


    document.getElementById("catdata").innerHTML = '';

    alert("All Data cleared!");

}



// Function to Edit Data
const editData = (id) => {
    let alldata = JSON.parse(localStorage.getItem("catInfo"))
    let final_res = alldata.find((i) => {
        return i.id == id
    })

    // brings all data in field for further editing
    document.catfrm.catname.value = final_res.name;
    // document.catfrm.catage.value = final_res.age;
    // document.catfrm.catsalary.value = final_res.salary;
    document.catfrm.catid.value = id
}


Display()