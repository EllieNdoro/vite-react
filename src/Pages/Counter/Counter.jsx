import React from 'react'

const Counter = () => {
  const ChangeMe = () =>{
    alert("Hi There")
   }
  
  
    return (
    <div>
        <center style={{marginTop:"30px"}}>
        Counter

        <button onClick={ChangeMe}> click me</button> 
        </center>


        </div>
  )
}

export default Counter