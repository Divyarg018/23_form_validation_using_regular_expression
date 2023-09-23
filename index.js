const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validEmail = false;
let validPhone = false;
let validUser = false;


// console.log(name, email, phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
       
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
        
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
      
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('you clicked on submit');
    console.log(validEmail, validUser, validPhone);
    //submit your form here
    if(validEmail && validUser && validPhone){
        console.log('phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else{
        
        console.log('One of phone, email and user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }

  
})