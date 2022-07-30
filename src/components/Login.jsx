import React from 'react'
import { useRef, useState, useEffect } from 'react';


function Login() {

    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser] = useState('');
    const [pwd, setpwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);

    useEffect(() => {
        useRef.current.focus();

    }, [])

    useEffect(() => {

        setErrMsg('');
    }, [user, pwd])


const checksubmit= async(e)=>{
    e.preventDefault();
}
    return (
        <div>



        </div>
    )
}

export default Login