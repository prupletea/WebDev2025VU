function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
}

function isOldEnough(age) {
    // validate if input number is positive
    if(age <= 0) {
        console.log("age must be a positive number");
        return false;
    }
    // validate if number is an integer
    if(!Number.isInteger(age)) {
        console.log("age must be a whole number");
        return false;
    }
    // check age requirements
    if(age < 13) {
        console.log("you must be 13 or older to sign up");
        return false;
    }

    return true;
}