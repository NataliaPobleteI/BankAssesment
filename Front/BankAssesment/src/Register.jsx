import React, { useState } from "react"

export const Register = () => {
    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[username, setUserName] = useState('');
    const[pass, setPassword] = useState('');
    const[confirmpass, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname, lastname, username, pass, confirmpass);
    }

    return (
        <div className="auth-form-container">
            <h2>Real World App</h2>
            <h3 >Sign Up</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="FirstName">First Name</label>
                <input value={firstname} type="FirstName" placeholder="First Name" id="firstname" name="firstname"/>
                <label htmlFor="LastName">Last Name</label>
                <input value={lastname} type="LastName" placeholder="Last Name" id="lastname" name="lastname"/>
                <label htmlFor="Username">Username</label>
                <input value={username} type="Username" placeholder="Username" id="username" name="username"/>
                <label htmlFor="Password">Password</label>
                <input value={pass} type="Password" placeholder="*******" id="password" name="password"/>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input value={confirmpass} type="ConfirmPassword" placeholder="*******" id="confirmpassword" name="lasconfirmpassword"/>
                <button className="sign-up-button" type="submit">SIGN UP</button>
            </form>
        </div>
    )
}