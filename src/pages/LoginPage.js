import React, { useState } from "react";
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

function LoginPage () {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const handleChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    return (
        <div>
            <form>
                <label>E-mail</label>
                <Input type="text" placeholder="Enter your e-mail" onChange={handleChange}/>
                <label>Password</label>
                <Input type="password" placeholder="Enter your password" onChange={handlePasswordChange}/>
                <Button>Login</Button>
            </form>
            <p>Don't have an account?</p>
            <Button>Sign Up</Button>
        </div>
    )
};

export default LoginPage;
