




let fetchData=async()=>{
let url="http://localhost:3000/hotel"
let res=await fetch(url)
let data=await res.json()
console.log(data)
let display=document.querySelector("#display")
data.map((e)=>{
display.innerHTML+=`<tbody>
<td>${e.name}</td>
<td>${e.age}</td>
<td>${e.city}</td>
<td>${e.aadhar}</td>
<td>${e.number}</td>
<td>${e.fees}</td>
<td>${e.person}</td>
<td>${e.fees*e.person}</td>
<td onclick="deletee('${e.id}')">cancel</td>
</tbody>`
})
}
// fetchData()

let deletee = (id)=>{

    let url = `http://localhost:3000/hotel/${id}`

    fetch(url,{method:"DELETE"})
}

let userinput=()=>{
    let inpname = document.querySelector("#name").value
    let inpage = document.querySelector("#age").value
    let inpcity = document.querySelector("#city").value
    let inpaadhar = document.querySelector("#aadhar").value
    let inpnum = document.querySelector("#number").value
    let inpfees = document.querySelector("#fees").value
    let inpperson = document.querySelector("#person")

    let url ="http://localhost:3000/hotel"
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
            fees: 2000,
            person: inpperson,

        })
    })
     
}
