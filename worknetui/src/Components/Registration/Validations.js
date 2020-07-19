export const onChangeFirstName=()=>{
    return function(){
        var nameregx = /^[a-z]+$/i;
        var name = document.getElementById('firstName').value;
        var result = nameregx.test(name);
        result?document.getElementById('firstName').style.border="2px solid green":
        document.getElementById('firstName').style.border="2px solid red";
    }
}

export const onChangeLastName=()=>{
    return function(){
        var nameregx = /^[a-z]+$/i;
        var name = document.getElementById('lastName').value;
        var result = nameregx.test(name);
        result?document.getElementById('firstName').style.border="2px solid green":
        document.getElementById('firstName').style.border="2px solid red";
    }
}

export const onChangeEmail=()=>{
    return function(){
        var emailregx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var email = document.getElementById('email').value;
        var result = emailregx.test(email);
        result?document.getElementById('email').style.border="2px solid green":
        document.getElementById('email').style.border="2px solid red";
    }
}

export const onChangeMobile=()=>{
    return function(){
        var mobileregx = /^[6-9]{1}[0-9]{9}$/;
        var mobile = document.getElementById('mobile').value;
        var result = mobileregx.test(mobile);
        result?document.getElementById('mobile').style.border="2px solid green":
        document.getElementById('mobile').style.border="2px solid red";
    }
}

export const onChangeGender=()=>{
    return function(){
        var genderregx = /^[a-z0-9]+$/i;
        var gender = document.getElementById('gender').value;
        var result = genderregx.test(gender);
        result?document.getElementById('gender').style.border="2px solid green":
        document.getElementById('gender').style.border="2px solid red";
    }
}

export const onChangePasswordStrength=()=>{
    return function(){
        var strongPasswordregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        var averagePasswordregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        var password = document.getElementById('password').value;
        strongPasswordregx.test(password)?document.getElementById('password').style.border="2px solid green":
        averagePasswordregx.test(password) ? document.getElementById('password').style.border="2px solid yellow" :
        document.getElementById('password').style.border="2px solid red";
    }
}