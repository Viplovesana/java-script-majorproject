

let signup=()=>{

    let signname = document.querySelector("#name").value
    let signage = document.querySelector("#age").value
    let signbg = document.querySelector("#bloodgroup").value
    let signnum = document.querySelector("#number").value
    let signemail = document.querySelector("#email").value
    let signpass= document.querySelector("#password").value


    let errname = document.querySelector("#errname")
    let errage = document.querySelector("#errage")
    let errbloodgroup = document.querySelector("#errbloodgroup")
    let errnumber = document.querySelector("#errnumber")
    let erremail = document.querySelector("#erremail")
    let errpassword = document.querySelector("#errpassword")


    //.........................Name...........................//

    if(signname==""){
        errname.innerHTML="Oops! please enter your name"
        return false
    }


    //........................AGE............................//

    if(signage==""){
        errage.innerHTML="Oops! please enter your age"
        return false
    }


    //.......................bloodgroup....................//

    if(signbg==""){
        errbloodgroup.innerHTML="Oops! please enter your blood group"
        return false
    }

    //....................number...........................//

    if(signnum==""){
        errnumber.innerHTML="Oops! please enter contact number"
        return false
    }

    //......................email..........................//

    if(signemail==""){
        erremail.innerHTML="Oops! please enter your email adress"
        return false
    }

    //......................password.........................//

    if(signpass==""){
        errpassword.innerHTML="Oops! please enter your password"
        return false
    }

    localStorage.setItem("name",signname)
    localStorage.setItem("age",signage)
    localStorage.setItem("bloodgroup",signbg)
    localStorage.setItem("number",signnum)
    localStorage.setItem("email",signemail)
    localStorage.setItem("password",signpass)

    location.href="login.html"
    return false
}