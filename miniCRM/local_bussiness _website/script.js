document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault()

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const message=document.getElementById("message").value

if(name===""||email===""||message===""){
alert("Please fill all fields")
return
}

document.getElementById("successMessage").innerText="Message sent successfully!"

this.reset()

})
