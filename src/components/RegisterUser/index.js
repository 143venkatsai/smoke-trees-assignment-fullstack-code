import React, {useState} from "react"

import "./index.css"

const RegisterUser = () =>{
    const [username, setUserName] = useState("");
    const [address, setAddress] = useState("");
   
    const onSunbmitForm = async (event) =>{
        event.preventDefault();

        const details ={
            name: username,
            address:address
        }
        try{
            const apiUrl = "https://smoketress-assignment-backend-2.onrender.com/register/"
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            }
            const response = await fetch(apiUrl,options);
            console.log(response)
            console.log("Response Status: ", response.status);
            if(response.ok){
                const data = await response.json();
                console.log(data);
                alert("User and Address saved successfully");
            }else{
                console.log("Error in saving details");
                alert("Failed to save details");
            }
            
        }catch(error){
            console.error(`Error: ${error}`);
            alert("Error connecting to the server")
        }
        setUserName("");
        setAddress("");
    }

    return(
    <div className="register-user-container">
        <h1 className="heading">Register User and Address</h1>
        <form className="form-container" onSubmit={onSunbmitForm}>
                <label htmlFor="username" className="label-element">Username</label>
                <input type="text" 
                id="username" 
                value={username} 
                name="username" 
                className="input-element" 
                placeholder="Enter Username" 
                onChange={(e)=>setUserName(e.target.value)}
                required/>
            <br/>
                <label htmlFor="address" className="label-element">Address</label>
                <input type="text" 
                id="address" 
                value={address} 
                name="address" 
                className="input-element" 
                placeholder="Enter Address" 
                onChange={(e)=>setAddress(e.target.value)}
                required/>
            <br/>
                <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
)
}

export default RegisterUser