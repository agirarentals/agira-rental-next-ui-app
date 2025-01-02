import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import {auth} from '../lib/firestore/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext=createContext();
const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState(undefined);
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
        return ()=>unsub();
    },[])
  return (
    <AuthContext.Provider value={{user,isLoading:user===undefined}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
export const useAuth=()=>useContext(AuthContext);