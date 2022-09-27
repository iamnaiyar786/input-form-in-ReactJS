import React from 'react';
import { useState } from 'react';
import "./App.css";

const App =() =>{
    const[name, setName] = useState();
    const[fullname, setFullname]= useState();
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const submit = () =>{
        setFullname(name);
    }
    return(
    <>
    <div>
        <h1>Hello {fullname} </h1>
        <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name} />
        <button onClick={submit}>Submit</button>
    </div>
    </>
    );
}

export default App;