




let fetchData=async()=>{
let url="http://localhost:3000/hotel"
let res=await fetch(url)
let data=await res.json()
console.log(data)
paginationdata(data)

}

let searchh=async()=>{
    let searchinp=document.querySelector("#searchinp").value.toLowerCase()

    let url='http://localhost:3000/hotel'

    let res=await fetch(url,{method:"GET"})

    let data=await res.json()

    let filterdata=data.filter((e)=>{

        return e.name.toLowerCase().includes(searchinp)
    })

   datashow(filterdata)     


}
let datashow=(data)=>{

let display=document.querySelector("#display")
display.innerHTML=""
data.map((e)=>{
display.innerHTML+=`<tbody  >
<td class="Vip">${e.name}</td>
<td class="Vip">${e.age}</td>
<td class="Vip">${e.city}</td>
<td class="Vip">${e.aadhar}</td>
<td class="Vip">${e.number}</td>
<td class="Vip">${e.fees}</td>
<td class="Vip">${e.person}</td>
<td class="Vip">${e.fees*e.person}</td>
<td onclick="confirmdeletee('${e.id}')" id="Vip2">cancel</td>
<td onclick="formfill('${e.id}')" id="Vip2">update</td>
</tbody>`
})
}




let confirmdeletee=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(()=>{
            deletee(id)
          })
        }
      });
}
// fetchData()

let deletee = (id)=>{

    

    let url = `http://localhost:3000/hotel/${id}`
 
    fetch(url,{method:"DELETE"})
}

let userinput=()=>{
    let inpname = document.querySelector("#name").value;
    let inpage = document.querySelector("#age").value;
    let inpcity = document.querySelector("#city").value;
    let inpaadhar = document.querySelector("#aadhar").value;
    let inpnum = document.querySelector("#number").value;
    let inpperson = document.querySelector("#Person").value;
 

    let url ='http://localhost:3000/hotel'
    fetch(url, { 
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: inpname,
            age: inpage,
            city: inpcity,
            aadhar: inpaadhar,
            number: inpnum,
            person: inpperson,
            
            fees: 2000,
          

        })
    })

    location.href = "table.html" 
    return false
     
}

let formfill =async(id)=>{

    let url = `http://localhost:3000/hotel/${id}`

    let res = await fetch(url,{method:"GET"}) 

    let data = await res.json()

    console.log(data);

    
    let formdata = `
    <form id="updateForm">

    Enter name : <input type="text" id="upname" value="${data.name}"><br><br>

      Enter name : <input type="text" id="upage" value="${data.age}"><br><br>

       Enter city : <input type="text" id="upcity" value="${data.city}" ><br><br>

       Enter your aadhar : <input type="text" id="upaadhar" value="${data.aadhar}" ><br><br>

       Enter your number : <input type="text" id="upnumber" value="${data.number}"><br><br>

       
        <select id="upPerson" value="${data.Person}">
            
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select><br><br>

          <input type="submit" value="Book your Appointment" onclick="return finaleupdate('${data.id}')" >

</form>

    `
    document.querySelector("#show").innerHTML=formdata


}

let finaleupdate=(id)=>{
    let inpname = document.querySelector("#upname").value;
    let inpage = document.querySelector("#upage").value;
    let inpcity = document.querySelector("#upcity").value;
    let inpaadhar = document.querySelector("#upaadhar").value;
    let inpnum = document.querySelector("#upnumber").value;
    let inpperson = document.querySelector("#upPerson").value;
  

    let url =`http://localhost:3000/hotel/${id}`
    fetch(url, { 
        method: "PUT",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: inpname,
            age: inpage,
            city: inpcity,
            aadhar: inpaadhar,
            number: inpnum,
            person: inpperson,
            
            fees: 2000
          

        })
    })

    // location.href = "crud.html" 
    return false
     
}
// .....................pagination data.....................
let paginationdata=(data)=>{
    $('#pagin').pagination({
        dataSource: data,
        pageSize: 5,
        showPrevious: false,
        showNext: false,
        callback: function(data, pagination) {
         datashow(data)
        }
    })

}



let logout=()=>{

    location.href = "/index.html"
    localStorage.clear()
}
