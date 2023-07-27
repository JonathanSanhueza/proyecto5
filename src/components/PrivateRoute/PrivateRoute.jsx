import {useContext, useEffect, useState} from 'react';
import UserContext from '../../contexts/users/UserContext';
import { Spinner } from 'react-bootstrap';
import {Navigate} from "react-router-dom"

export default function PrivateRoute({children}){
    const userCtx = useContext(UserContext)
    const {authStatus, verifyingToken}=userCtx
    const[loading, setLoading]= useState(true)
    
    useEffect(()=>{
        const verifyUser = async  ()=>{
            await verifyingToken()
            setLoading (false)
        }
        verifyUser()
    }, [])

    if (loading){
        return(
            <Spinner></Spinner>
        )
    }
    return authStatus ? (children):(<Navigate to="/"></Navigate>)
}