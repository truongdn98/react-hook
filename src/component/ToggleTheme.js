import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

const ToggleTheme = () => {
    const {changeTheme} = useContext(ThemeContext)
    const {theme} = useContext(ThemeContext)
  const {isLightTheme,light,dark} = theme
  const style = isLightTheme ? light : dark
    return (
        <div>
            <button className="btn btn-changeTheme" style={style} onClick={changeTheme}>Toggle Theme</button>
        </div>
    )
}

export default ToggleTheme
