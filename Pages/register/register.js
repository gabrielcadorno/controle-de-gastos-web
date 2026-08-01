function onChangeEmail(){
 const email = form.email().value;
 form.emailRequiredError().style.display = email ? 'none' : "block";

 form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';

 toggleRegisterButtonDisable();
}

function onChangePassword() {
 const password = form.password().value;

 form.PasswordRequiredError().style.display = password ? 'none' : 'block';
 form.passwordMinlengthError().style.display = password.length >= 6 ? 'none' : 'block';

 validatePasswordsMatch();

 toggleRegisterButtonDisable();
}

function onChangeConfirmPassword(){
 validatePasswordsMatch();

 toggleRegisterButtonDisable();
}

function validatePasswordsMatch(){
 const password = form.password().value;
 const confirmPassword = form.confirmPassword().value;

 form.confirmPasswordDoesnMatchError().style.display = password == confirmPassword ? 'none' : 'block';
}

function toggleRegisterButtonDisable(){
    form.registerbutton().disabled = !isFormValid();
}

function isFormValid(){
    const email = form.email().value;
    if (!email || !validateEmail(email)){ /*Se o email estiver vazio ou não existir || (ou) a validação não funcionar */
        return false
    }
    
    const password = form.password().value;
    if (!password || password.length < 6){
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
        return false;
    }

    return true;
}



const form = {
    confirmPassword: () => document.getElementById('confirmpassword'),
    confirmPasswordDoesnMatchError: () => document.getElementById('password-doesnt-match-error'),
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    passwordMinlengthError: () => document.getElementById('password-min-length-error'),
    PasswordRequiredError: () => document.getElementById('password-required-error'),
    registerbutton: () => document.getElementById('register-button')
}