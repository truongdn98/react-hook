 import React, {createContext, useState} from 'react'
 
export const AuthContext = createContext()
    const AuthContextProvider = ( {children}) => {
        const [auth, setAuth] = useState({
            authenticated : true 
        }
        )
    
        const authenticate = () => {
            setAuth({
                authenticated : !auth.authenticated
            })
        }
    const autheContextData = {
        auth,
        authenticate
    }
    
    return (
        <AuthContext.Provider value={autheContextData} >
            {children}
        </AuthContext.Provider>
    )
    }

export default AuthContextProvider
