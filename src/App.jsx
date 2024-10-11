import React from 'react'
import {useState} from 'react'

function App() {
  const [gender,setGender]=useState("others")

  const genderHandler=(e)=>{
    if(e.target.checked){
      setGender(e.target.value)
      console.log(e.target.value);
      
    }
  }


  const[error,setError]=useState(false)
  const inputHandler=(e)=>{
      if(e.target.value.length<5){
        setError(true)
      }
      else{
        setError(false)
      }
  }

  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()} action="">
        <input onInput={inputHandler} type="text" placeholder='username' name="username" />
        <input type="submit" />
        <input type="radio" name="gender" defaultValue={"other"} onChange={genderHandler}/>
        <input type="radio" name='gender' defaultValue={"female"} onChange={genderHandler}/>
        <input type="radio" name='gender' defaultValue={"male"} onChange={genderHandler}/>
      </form>
      {error && <p>please give a larger input</p>}
      
    </div>
  )
}

export default App