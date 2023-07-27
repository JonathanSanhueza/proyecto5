import {useContext, useEffect, useState} from 'react';
import UserContext from '../../contexts/users/UserContext';
import { Spinner } from 'react-bootstrap';
export default function PublicRoute({children}){
    const userCtx = useContext(UserContext)
    const {authStatus, verifyingToken}=userCtx
    const[loading, setLoading]= useState(true)
    
    useEffect(()=>{
        const verifyUser = async  ()=>{
            await verifyingToken()
            setLoading (false)
        }
        if(!authStatus) {
            verifyUser()
        }
    }, [])

    if (loading) return(<Spinner></Spinner>)
    
    return (children)
}