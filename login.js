

let login = ()=>{

  let loginname=document.querySelector("#loginname").value
  let loginpassword=document.querySelector("#loginpassword").value

  let localname=localStorage.getItem("name")
  let localpassword=localStorage.getItem("password")

  if(loginname==localname && loginpassword==localpassword){
     location.href="index.html"
  }
    
  
  else{
    alert("invalid username and password")
  }

  return false

}

let logout = ()=>{

  localStorage.clear()
  location.href="login.html"
}

