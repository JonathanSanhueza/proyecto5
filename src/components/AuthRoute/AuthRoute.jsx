import {useContext, useEffect, useState} from 'react';
import UserContext from '../../contexts/users/UserContext';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AuthRoute({children}){
    const userCtx = useContext(UserContext)
    const {authStatus, verifyingToken}=userCtx
    const[loading, setLoading]= useState(true)
    const navigate = useNavigate()
    
    useEffect(()=>{
        const verifyUser = async  ()=>{
            await verifyingToken()
            setLoading(false)
        }
        verifyUser()
        if(authStatus) {
            navigate ("/")
        }
    }, [authStatus])

    if (loading) return(<Spinner></Spinner>)
    
    return (children)
}