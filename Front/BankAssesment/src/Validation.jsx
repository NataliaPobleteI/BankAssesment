const Validation = (values) => {
    let errors = {};
    values.isValid = true;
    if (values.type === 'login'){    
        if (!values.username) {
            errors.username = 'Username is required';
            isValid = false;
        } else if(values.username != "solera@solera.com"){
            errors.username = 'Invalid username';
            values.isValid = false;
        }
    
        if (!values.password) {
            errors.password = 'Password is required';
            values.isValid = false;
        } else if(values.password != "bootcamp5"){
            errors.password = 'Invalid password';
            values.isValid = false;
        }
    } else if (values.type === 'register'){
        if (!values.firstname) {
            errors.firstname = 'First name is required';
            values.isValid = false;
        }
    
        if (!values.lastname) {
            errors.lastname = 'Last name is required';
            values.isValid = false;
        }
    
        if (!values.username) {
            errors.username = 'Username is required';
            values.isValid = false;
        } 
        else if(values.username != "solera@solera.com"){
            errors.username = 'Invalid username';
            values.isValid = false;
        }
    
        if (!values.password) {
            errors.password = 'Password is required';
            values.isValid = false;
        } 
        else if(values.password != "bootcamp5"){
            errors.password = 'Invalid password';
            values.isValid = false;
        }
    
        if (values.password !== values.confirmpassword) {
            errors.confirmpassword = "Passwords don't match.";
            values.isValid = false;
        }else if(!values.password || !values.confirmpassword){
            errors.confirmpassword = 'Password is required';
            values.isValid = false;
        }
    }

    
    errors.isValid="holaaaaaa"
    return errors;
}
export default Validation;



