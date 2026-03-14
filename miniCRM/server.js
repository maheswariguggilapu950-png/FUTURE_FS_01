const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

let leads = []

// Get all leads
app.get("/api/leads",(req,res)=>{
res.json(leads)
})

// Add lead
app.post("/api/leads",(req,res)=>{
const lead = req.body
lead.id = Date.now()
leads.push(lead)
res.json({message:"Lead added successfully"})
})

// Delete lead
app.delete("/api/leads/:id",(req,res)=>{
const id = parseInt(req.params.id)
leads = leads.filter(l => l.id !== id)
res.json({message:"Lead deleted"})
})

// Update status
app.put("/api/leads/:id",(req,res)=>{
const id = parseInt(req.params.id)

const lead = leads.find(l=>l.id===id)

if(lead){
lead.status = req.body.status
}

res.json({message:"Status updated"})
})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})
