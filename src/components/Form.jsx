import React,{useState} from "react";

export default function Forms(){

const [name,setname]=useState("")
const [age,setage]=useState("")
const [college,setcollege]=useState("")
const [email,setemail]=useState("")
const [phone,setphone]=useState("")
const [city,setcity]=useState("")
const [view,setview]=useState(false)

const handlename=(e)=>{
    setname(e.target.value)
}

const handleage=(e)=>{
    setage(e.target.value)
}

const handlecollege=(e)=>{
    setcollege(e.target.value)
}

const handleemail=(e)=>{
    setemail(e.target.value)
}

const handlephone=(e)=>{
    setphone(e.target.value)
}

const handlecity=(e)=>{
    setcity(e.target.value)
}

const handlesubmit=()=>{
    setview(true)
}

return(
<div>

{!view ? (

<div>

<label>Name:</label>
<input onChange={handlename}  placeholder="Enter your name"/>

<br/><br/>

<label>Age:</label>
<input onChange={handleage}  placeholder="Enter your age"/>

<br/><br/>

<label>College:</label>
<input onChange={handlecollege}  placeholder="Enter your college name"/>

<br/><br/>

<label>Email:</label>
<input onChange={handleemail}  placeholder="Enter your email"/>

<br/><br/>

<label>Phone:</label>
<input onChange={handlephone}  placeholder="Enter your phone number"/>

<br/><br/>

<label>City:</label>
<input onChange={handlecity}  placeholder="Enter your city"/>

<br/><br/>

<button onClick={handlesubmit}>Submit</button>

</div>

) : (

<div>
<h1>Name: {name}</h1>
<h1>Age: {age}</h1>
<h1>College: {college}</h1>
<h1>Email: {email}</h1>
<h1>Phone: {phone}</h1>
<h1>City: {city}</h1>
</div>

)}

</div>
)

}