import React, { useEffect, useState } from 'react'


/* 
    Problem statement :- A text should blink in every 1 second when component is loaded
*/ 
const BlinkingText = () => {
    const [isBlink, setIsBlink] = useState(false)
    useEffect(() => {
        let blinkInterval = setInterval(()=>{
            setIsBlink(prev => !prev)
        },1000)

        return () => {
            clearInterval(blinkInterval)
        }
    },[isBlink])

  return (
    <div>
     {isBlink && <p>Blinking</p>}
    </div>
  )
}

export default BlinkingText
