//Sign Up

const signupFrom = document.querySelector("#signup-from");

signupFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupFrom['signup-email'].value;
    const password = signupFrom['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        var modal = document.getElementById('popup-signup');
        modal.style.display = "none";
        signupFrom.reset();
    })
})

//End Sign Up

//////////////////////////////////////////////////////////

//Sign In

const signinFrom = document.querySelector("#signin-from");

signinFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signinFrom['signin-email'].value;
    const password = signinFrom['signin-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        var modal = document.getElementById('popup-signup');
        modal.style.display = "none";
        signinFrom.reset();
    })
})

//End Sign In