const Validation = (values) => {
    let errors = {};

    if (values.type === 'login'){
        if (!values.firstname) {
            errors.firstname = 'First name is required';
        }
    
        if (!values.lastname) {
            errors.lastname = 'Last name is required';
        }
    
        if (!values.username) {
            errors.username = 'Username is required';
        } 
        // else if(values.username != "solera@solera.com"){
        //     errors.username = 'Invalid username';
        // }
    
        if (!values.password) {
            errors.password = 'Password is required';
        } 
        // else if(values.password != "bootcamp5"){
        //     errors.password = 'Invalid password';
        // }
    
        if (values.password != values.confirmpassword) {
            isValid = false;
            errors.pass = "Passwords don't match.";
        }else if(!values.password || !values.confirmpassword){
            errors.password = 'Password is required';
        }
    } else if (values.type === 'register'){
        if (!values.firstname) {
            errors.firstname = 'First name is required';
        }
    
        if (!values.lastname) {
            errors.lastname = 'Last name is required';
        }
    
        if (!values.username) {
            errors.username = 'Username is required';
        } 
        else if(values.username != "solera@solera.com"){
            errors.username = 'Invalid username';
        }
    
        if (!values.password) {
            errors.password = 'Password is required';
        } 
        else if(values.password != "bootcamp5"){
            errors.password = 'Invalid password';
        }
    
        if (values.password != values.confirmpassword) {
            isValid = false;
            errors.pass = "Passwords don't match.";
        }else if(!values.password || !values.confirmpassword){
            errors.password = 'Password is required';
        }
    }

      
    return errors;
}
export default Validation;



