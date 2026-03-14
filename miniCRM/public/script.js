const form = document.getElementById("leadForm")
const table = document.getElementById("leadTable")

form.addEventListener("submit",async(e)=>{

e.preventDefault()

const lead = {
name:document.getElementById("name").value,
email:document.getElementById("email").value,
status:document.getElementById("status").value
}

await fetch("/api/leads",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(lead)
})

loadLeads()
form.reset()

})

async function loadLeads(){

const res = await fetch("/api/leads")
const leads = await res.json()

table.innerHTML=""

leads.forEach(l=>{

const row=document.createElement("tr")

row.innerHTML=`

<td>${l.name}</td>
<td>${l.email}</td>

<td>
<select onchange="updateStatus(${l.id},this.value)">
<option ${l.status==="New"?"selected":""}>New</option>
<option ${l.status==="Contacted"?"selected":""}>Contacted</option>
<option ${l.status==="Converted"?"selected":""}>Converted</option>
</select>
</td>

<td>
<button class="delete" onclick="deleteLead(${l.id})">Delete</button>
</td>

`

table.appendChild(row)

})

}

async function deleteLead(id){

await fetch("/api/leads/"+id,{
method:"DELETE"
})

loadLeads()

}

async function updateStatus(id,status){

await fetch("/api/leads/"+id,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({status})
})

}

loadLeads()
