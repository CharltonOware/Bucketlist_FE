// Declare variables/constants

// Define some useful functions

// Define event handlers
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e=> {
      e.preventDefault();
      loginForm.classList.add("form__hidden");
      createAccountForm.classList.remove("form__hidden");  
    });

    document.querySelector("#linkLogin").addEventListener("click", e=> {
        e.preventDefault();
        createAccountForm.classList.add("form__hidden");
        loginForm.classList.remove("form__hidden");
    });
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