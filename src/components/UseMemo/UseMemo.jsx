// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
// To cache a calculation between re-renders, wrap it in a useMemo call at the top level of your component:

import React, { useMemo, useState } from 'react'

export const UseMemo = () => {
    const [add,setAdd] = useState(0);
    const [sub,setSub] = useState(100);

    const handleAdd=()=>{
        setAdd(add+1)
    }
    const handleSub=()=>{
        setSub(sub-1)
    }

    const multiplication = useMemo(()=>{
        console.log('********')
        return add*10
    },[add])
   
  return (
    <div>
        <h1>UseMemo Hook</h1>
        {multiplication} <br/>
        <span>{add}</span>
        <button onClick={handleAdd}>Addition</button>
        <br/>
        <button onClick={handleSub}>Subtraction</button>
        <span>{sub}</span>
    </div>
  )
}
