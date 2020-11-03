window.onload = function(){
    // Set all validations functions to inputs
    var inputName = document.querySelector('#name');
    inputName.onblur = validateName;
    var inputMail = document.querySelector('#mail');
    inputMail.onblur = validateMail;
    var inputPass = document.querySelector('#password');
    inputPass.onblur = validatePass;
    var inputAge = document.querySelector('#age');
    inputAge.onblur = validateAge;
    var inputTel = document.querySelector('#tel');
    inputTel.onblur = validateTel;
    var inputAddres = document.querySelector('#address');
    inputAddres.onblur = validateAddress;
    var inputCity = document.querySelector('#city');
    inputCity.onblur = validateCity;
    var inputZip = document.querySelector('#zip-code');
    inputZip.onblur = validateZip;
    var inputDni = document.querySelector('#dni');
    inputDni.onblur = validateDni;
    
    // Remove error on Focus
    var allInputs = document.querySelectorAll('input');
    for (let index = 0; index < allInputs.length; index++) {
        allInputs[index].onfocus= removeError;
    }
    
    //Complete title with full name
    inputName.onkeyup = completeName;

    //Catch submit form
    var form = document.querySelector('#subs-form');
    form.onsubmit = validateAllInputs;
}

// Validators Functions
function validateName(){
    let inputBlur = document.querySelector('#name');
    if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(inputBlur.value) || inputBlur.value.length<=6 ){
        setError(inputBlur);
        return false;
    }
    return true;
}

function validateMail(){
    let inputBlur = document.querySelector('#mail');
    if(! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(inputBlur.value)){
        setError(inputBlur);
        return false;
    }
    return true;
}

function validatePass(){
    let inputBlur = document.querySelector('#password');
    if(inputBlur.value.length<8 || !/^[a-zA-Z0-9]+$/.test(inputBlur.value)){
        setError(inputBlur);
        return false;
    }
    return true;
}

function validateAge(){
    let inputBlur = document.querySelector('#age');
    if(!/^[0-9]+$/.test(inputBlur.value) || inputBlur.value < 18){
        setError(inputBlur);
        return false;
    }
    return true;
}

function validateTel(){
    let inputBlur = document.querySelector('#tel');
    if(!/^[0-9]+$/.test(inputBlur.value) || inputBlur.value.length < 7){
        setError(inputBlur);
        return false;
    }
    return true;
}

function validateAddress(){
    let inputBlur = document.querySelector('#address');
    if(!/^[a-zA-Z0-9]+ [a-zA-Z0-9]+$/.test(inputBlur.value) || inputBlur.value.length<5 ){
        setError(inputBlur);
        return false;
    }
    return true;
}

function validateCity(){
    let inputBlur = document.querySelector('#city');
    if(inputBlur.value.length<3 ){
        setError(inputBlur);
        return false;
    }
    return true;
}

function validateZip(){
    let inputBlur = document.querySelector('#zip-code');
    if(inputBlur.value.length<3 ){
        setError(inputBlur);
        return false;
    }
    return true;
}


function validateDni(e){
    let inputBlur = document.querySelector('#dni');
    if(!/^[0-9]+$/.test(inputBlur.value) || inputBlur.value.length<7 || inputBlur.value.length>8 ){
        setError(inputBlur);
        return false;
    }
    return true;
}

//Set Errors if inputs are not valid
function setError(input){
    input.classList.add('border-error');
    input.nextElementSibling.classList.add('disp-on');
    if (input.nextElementSibling.classList.contains('disp-none')){
        input.nextElementSibling.classList.remove('disp-none');
    }
}

//Remove Error function on focus input
function removeError(e){
    if (e.target.classList.contains('border-error')){
        e.target.classList.remove('border-error');
    }
    if (e.target.nextElementSibling.classList.contains('disp-on')){
        e.target.nextElementSibling.classList.remove('disp-on');
    }
    e.target.nextElementSibling.classList.add('disp-none');
}

function completeName(e){
    var title = document.getElementById('titleHello');
    title.innerHTML = 'Hello, ' + e.target.value + '!';
}


function validateAllInputs(e){
    e.preventDefault();
    var alertString = '';
    var allInputs = document.querySelectorAll('input');
    for (let index = 0; index < allInputs.length; index++) {
        if(allInputs[index].id != 'repeat' && !allInputs[index].onblur()){
            alertString += allInputs[index].placeholder + ' contains error \n';
        }else{
            alertString += allInputs[index].placeholder +': ' + allInputs[index].value + '\n';
        }
    }
    alert(alertString);
}


//<>