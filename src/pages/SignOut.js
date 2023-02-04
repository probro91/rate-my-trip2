import React from 'react'
import {auth} from './firebase-config'
import { signOut} from "firebase/auth"
const SignOut = () => {
    const logout = async () => {
        await signOut(auth)
    }
    return (
        <button onClick = {logout}>Sign Out</button>
    )
}

export default SignOut