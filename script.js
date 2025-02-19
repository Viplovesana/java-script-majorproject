

let signup=()=>{

    let signname = document.querySelector("#name").value
    let signage = document.querySelector("#age").value
    let signbg = document.querySelector("#bloodgroup").value
    let signnum = document.querySelector("#number").value
    let signemail = document.querySelector("#email").value
    let signpass= document.querySelector("#password").value


    let errname = document.querySelector("#errname")
    let errage = document.querySelector("#errname")
    let errbloodgroup = document.querySelector("#errname")
    let errnumber = document.querySelector("#errname")
    let erremail = document.querySelector("#errname")
    let errpassword = document.querySelector("#errname")


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
}