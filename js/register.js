document.querySelector("#btn").addEventListener("click",(e)=>{
    //alert("Enter Your Details")
    e.preventDefault()

    let fname=document.querySelector("#fname").value
    let lname=document.querySelector("#lname").value
    let email=document.querySelector("#email").value
    let phone=document.querySelector("#phone").value
    let password=document.querySelector("#password").value
    let cpassword=document.querySelector("#cpassword").value
    let error=document.querySelector("#error")
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(fname.length===0){
        error.innerHTML="Enter First Name"
        error.style.color="red" 
        
    }else if(lname.length===0){
        error.innerHTML="Enter Last Name"
        error.style.color="red"
    }else if(email.length===0){
        error.innerHTML="Enter Email"
        error.style.color="red"
    }
    else if (!emailPattern.test(email)) {
        error.innerHTML = "Enter a Valid Email";
        error.style.color = "red";
    } else if(phone.length===0){
        error.innerHTML="Enter Phone Number"
        error.style.color="red"
    } 
    else if (!phonePattern.test(phone)) {
        error.innerHTML = "Phone Number Must be 10 Digits and Contain Only Numbers";
        error.style.color = "red";
    }
    else if(password.length===0){
        error.innerHTML="Enter Password"
        error.style.color="red"
    }
    else if (!passwordPattern.test(password)) {
        error.innerHTML = "Password Must be at Least 8 Characters Long, Contain One Uppercase Letter, One Lowercase Letter, One Number, and One Special Character";
        error.style.color = "red";
    } else if(cpassword.length===0){
        error.innerHTML="Enter cPassword"
        error.style.color="red"
    }else if(password!==cpassword){
        error.innerHTML="Check Passwords"
        error.style.color="red"
    }
    else{
        error.innerHTML="Register Success"
        error.style.color="green"
    }

})