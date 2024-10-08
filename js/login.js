document.querySelector("#btn").addEventListener("click",(e)=>{
    //alert("Enter Your Details")
    e.preventDefault()

    
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
    let error=document.querySelector("#error")
    


    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(email.length===0){
        error.innerHTML="Enter Email"
        error.style.color="red"
    }
    else if (!emailPattern.test(email)) {
        error.innerHTML = "Enter a Valid Email";
        error.style.color = "red";
    }else if(password.length===0){
        error.innerHTML="Enter Password"
        error.style.color="red"
    }
    else if (!passwordPattern.test(password)) {
        error.innerHTML = "Password Must be at Least 8 Characters Long, Contain One Uppercase Letter, One Lowercase Letter, One Number, and One Special Character";
        error.style.color = "red";
    }
    else{
        error.innerHTML="Login Success, Please Wait we navigate to Dashboard"
        error.style.color="green"
        location.assign("dashboard.html")
    }

})