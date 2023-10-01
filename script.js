const getAccess =()=>{
    const emailFild = document.getElementById("input-email");
    const email = emailFild.value;

    const passFild = document.getElementById("input-password");
    const password = passFild.value;
    if(email === 'mi@my.com' && password === 'pass'){
        window.location.href = 'bank.html'
    }
    else{
        alert("nigga , email: mi@my.com & pass: pass")
    }
}