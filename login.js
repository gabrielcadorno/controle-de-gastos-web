function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassrowd() {
    togglePasswordErrors();
    toggleButtonsDisable();
}

function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "pages/home/home.html";
  }).catch(error => {
    alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
    if (error.code == 'auth/invalid-credential') {
        return 'Usuário não encontrado'
    } 
    console.log('error', error); 
}

function register() {
    window.location.href = "Pages/register/register.html";
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? 'none' : 'block';
    
   // o codigo (form.emailRequiredError().style.display = email ? 'none' : 'block';) faz o mesmo que o if else
   // if (!email) {
   //     form.emailRequiredError().style.display = 'block';
   // } else {
   //     form.emailRequiredError().style.display = "none";
   //} 

    form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';
}

function togglePasswordErrors() {

    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? 'none' : 'block';
    
}

function toggleButtonsDisable() {

    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;

}

function isPasswordValid() {

    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }
    return true;

}

const form = {

    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    // a cima são os id necessarios para o email//

    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button'),
    // a cima são os id necessarios para o password//

    loginButton: () => document.getElementById('login-button'),
    // a cima são os id necessarios para o botão de login//

}