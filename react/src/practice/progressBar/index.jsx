import React, { useEffect, useState } from 'react'
import './index.css'
const ProgessBar = () => {
    const [progressBar, setProgressbar] = useState(90);

    useEffect(() => {
        setProgressbar(progressBar)
    },[])

    useEffect(() => {
        let timer = setInterval(() => {
            setProgressbar(progressBar + 1)
        }, 1000)

        progressBar === 100 && clearInterval(timer)
        return () => {
            clearInterval(timer)
        }
    },[progressBar])
  return (
    <div className='progress' style={{width: progressBar, 'background-color':'red'}}>
        {progressBar}
    </div>
  )
}

export default ProgessBar
