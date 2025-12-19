function validateForm(email, age, phone) {
    if(email = "" || !emailIsValid(email)){
        return false;
    }
    if(isNaN(age) || !isOldEnough(Number(age))){
        return false;
    }
    if(!(phone == "" || phone == "+370xxxxxxxx") && !phoneIsValid(phone)){
        return false;
    }
    return true;
}

function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email);
}

function phoneIsValid(phone) {
    return /^\+370\d{8,8}/.test(phone);
}

function isOldEnough(age) {
    if(age <= 0) {
        return false;
    }
    if(!Number.isInteger(age)) {
        return false;
    }
    if(age < 13 && age > 120) {
        return false;
    }

    return true;
}

function showEmailPref() {
    document.querySelector('.email-pref').style.display = "block";
}

function showCallConsent() {
    document.querySelector('.call-consent').style.display = "block"
}