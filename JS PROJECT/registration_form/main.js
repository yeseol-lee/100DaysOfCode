const id = document.getElementById("id");
const password = document.getElementById("password");
const name = document.getElementById("name");
const zip = document.getElementById("zip");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /\d{3}-\d{3}-\d{4}/;


id.nextElementSibling.innerHTML = "helloworld";

//id validation
id.addEventListener('focusout', () => {
    
   
}
    
);



//password validation
password.addEventListener('focusout', () => {
    
    alert("hello");
}
    
);



//name validation
name.addEventListener('focusout', () => {
    
    alert("hello");
}
    
);



//zip validation
zip.addEventListener('focusout', () => {
    
    alert("hello");
}
    
);



//email validation
email.addEventListener('focusout', () => {
    
    if( emailRegex.test(email.value) ) {
        
        email.nextElementSibling.innerHTML = "";
        
        
    } else {
        
        
        email.nextElementSibling.innerHTML = "It's not valid email.";
    }
}
    
);



//phone validation
phone.addEventListener('focusout', () => {
    
    if ( phoneRegex.test(phone.value)) {
        
        phone.nextElementSibling.innerHTML = "";
        
    } else {
        
        phone.nextElementSibling.innerHTML = "it must be '000-000-0000'";
    }
}
    
);
