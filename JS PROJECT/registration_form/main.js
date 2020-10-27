const id = document.getElementById("id");
const password = document.getElementById("password");
const c_password = document.getElementById("c-password");
const zip = document.getElementById("zip");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const form = document.getElementById("form");

const idRegex = /^[a-z0-9]{4,16}$/;
const zipRegex = /^\d{5}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;


var valid = true;


//id validation
id.addEventListener('focusout', () => {

        if (idRegex.test(id.value)) {

            id.nextElementSibling.innerHTML = "";
            valid = true;

        } else {

            id.nextElementSibling.innerHTML = "id must be 4 to 16 lowercase letters or combination of letters and numbers";
            valid = false;

        }

    }

);



//password validation
password.addEventListener('focusout', () => {

        if (passwordRegex.test(password.value)) {

            password.nextElementSibling.innerHTML = "";
            valid = true;

        } else {

            password.nextElementSibling.innerHTML = "Your password must contain at least 1 lowercase, uppercase, number, special character and must be 8~20 long";
            valid = false;

        }
    }

);



//c_password validation
c_password.addEventListener('focusout', () => {
    
        if (c_password.value === password.value) {

            c_password.nextElementSibling.innerHTML = "";
            valid = true;

        } else {

            c_password.nextElementSibling.innerHTML = "It's not the same password";
            valid = false;

        }

    }

);



//zip validation
zip.addEventListener('focusout', () => {

        if (zipRegex.test(zip.value)) {

            zip.nextElementSibling.innerHTML = "";
            valid = true;

        } else {

            zip.nextElementSibling.innerHTML = "zip code must be 5 numbers. ex)12345";
            valid = false;
        }
    }

);



//email validation
email.addEventListener('focusout', () => {

        if (emailRegex.test(email.value)) {

            email.nextElementSibling.innerHTML = "";
            valid = true;


        } else {


            email.nextElementSibling.innerHTML = "It's not valid email";
            valid = false;
        }
    }

);



//phone validation
phone.addEventListener('focusout', () => {

        if (phoneRegex.test(phone.value)) {

            phone.nextElementSibling.innerHTML = "";
            valid = true;

        } else {

            phone.nextElementSibling.innerHTML = "it must be '000-000-0000'";
            valid = false;
        }
    }

);



form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const notNull = (id.value != "" && password.value != "" && c_password.value != "" && zip.value != "" && email.value != "" && phone.value != "");
    console.log(notNull);

    if (valid && notNull) {

        alert("OK!");

    } else {

        alert("check your error message");
    }
}
