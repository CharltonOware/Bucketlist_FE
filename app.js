// Declare variables/constants

const loginurl = 'http://localhost:5000/login';
const registrationUrl = 'http://localhost:5000/registration';

// Define some useful functions

// Define event handlers
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    //Handler for clicking on the create account link
    document.querySelector("#linkCreateAccount").addEventListener("click", e=> {
      e.preventDefault();
      loginForm.classList.add("form__hidden");
      createAccountForm.classList.remove("form__hidden");  
    });
    //Handler for clicking on the login link
    document.querySelector("#linkLogin").addEventListener("click", e=> {
        e.preventDefault();
        createAccountForm.classList.add("form__hidden");
        loginForm.classList.remove("form__hidden");
    });

    //Handler for submitting during the account creation process
    createAccountForm.addEventListener("submit", e=> {
        e.preventDefault();
        //Register new user using fetch()
        const email = document.querySelector("#signupEmail").value;
        const password = document.querySelector("#signupPass").value;
        console.log(email, password);
        try {
            const res = await fetch(registrationUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                })
            });
            const data_1 = await res.json();
            console.log("DATA", data_1);
        } catch (error) {
            console.log("Error", error);
        }
    })
    //Handler for submitting during the login process
    loginForm.addEventListener("submit", e=> {
        e.preventDefault();
        //fetch login
        const email = document.querySelector("#login-email").value;
        const password = document.querySelector("#login-pass").value;
        console.log(email, password);
        return fetch(loginurl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
            })
        })
        .then( res => {
            console.log('FULL RESPONSE ',res);
            return res.json()

        })
        .then(data => {
            console.log('DATA',data);
            localStorage.setItem('auth_token',JSON.stringify(data))
            //window.location.push("/home/bucketlist.html");
        })
        .catch(error => {
            //enter logic when there is an error
            console.log(error)
        });
    })

    // document.querySelectorAll(".form__input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupEmail" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Email must be at least 10 characters in length.");
    //         }
    //     });
    //     inputElement.addEventListener("input", e=> {
    //         clearInputError(inputElement);
    //     })
    // })
})