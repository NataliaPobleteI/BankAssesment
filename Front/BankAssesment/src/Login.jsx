export const Login = () => {
    return (
        <form>
            <label for="FirstName">First Name</label>
            <input type="FirstName" placeholder="First Name" id="firstname" name="firstname"/>
            <label for="LastName">Last Name</label>
            <input type="LastName" placeholder="Last Name" id="lastname" name="lastname"/>
            <label for="Username">Username</label>
            <input type="Username" placeholder="Username" id="username" name="username"/>
            <label for="Password">Password</label>
            <input type="Password" placeholder="Password" id="password" name="password"/>
            <label for="ConfirmPassword">Confirm Password</label>
            <input type="ConfirmPassword" placeholder="Confirm Password" id="confirmpassword" name="lasconfirmpassword"/>
        </form>
    )
}