import React from 'react'
import { useTheme } from '../../Context/ThemeContext'
import "./index.css"
const LightDarkMode = () => {

    const {theme , toggleTheme} = useTheme();
  return (
    <div>
        <h1> This is our heading</h1>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme}/>
    </div>
  )
}

export default LightDarkMode
