function sendMail(){
    let parms={
        name: document.getElementById("urname").value,
        email: document.getElementById("uremail").value,
        message:document.getElementById("urmsg").value,
    }
    
    emailjs.send("service_6z98ewb","template_mczl3xu",parms)
    .then(()=>alert("Email Sent!!"))
    
}