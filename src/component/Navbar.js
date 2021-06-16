import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {ThemeContext} from '../contexts/ThemeContext'

const Navbar = () => {
  const { auth, authenticate } = useContext(AuthContext);
  const {theme} = useContext(ThemeContext)
  const {isLightTheme,light,dark} = theme
  const style = isLightTheme ? light : dark

  const style2 = {
      height: '30px',
      margin: '20px 10px 0 0 '
  }

  return (
      <div>
    <div className="account-right">
      { auth.authenticated ? 
          <img style={style2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOU5y8ZrUdYhMkGlNSTXTGp9cyl-YksmVQ8l_34xm9NhfReUHzoerCCaN26Vs2zeBtu0&usqp=CAU" alt="" />
       : '' }
      <button onClick={authenticate} style={style}> 
        {auth.authenticated ? "Logout" : "Login"}
      </button>
  
    </div>
    </div>
  );
};

export default Navbar;
