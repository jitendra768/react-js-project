import React, { useState } from 'react'

const UseStateHook = () => {
    const [count,setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default UseStateHook