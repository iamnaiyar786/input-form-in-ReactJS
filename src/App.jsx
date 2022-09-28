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
        event.preventDefault();
        setFullname(name);
    }
    return(
    <>
    <div>
        <form onSubmit={submit}>
        <h1>Hello {fullname} </h1>
        <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name} />
        <button>Submit</button>
        </form>
    </div>
    </>
    );
}

export default App;
