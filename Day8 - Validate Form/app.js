var form = document.querySelector('form')
var userName = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm_password')

function showError(input, message) {
    var statusElement = input.parentElement.querySelector('small')
    statusElement.classList.remove('success')
    statusElement.innerHTML = message
}

function showSuccess(input) {
    var statusElement = input.parentElement.querySelector('small')
    statusElement.classList.add('success')
}

function checkFill(inputs) {
    let isFill = true
    inputs.forEach(e => {
        if (e.value.trim() === "") {
            isFill = false
            showError(e, `${e.id} is required`)
        } else {
            showSuccess(e)
        }
    })
    return isFill
}

function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, "email is not valid")
    }
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${input.id} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${input.id} must be less than ${max} characters`)
    } else {
        showSuccess
    }
}

function checkMatch(input1, input2) {
    if (input1.value === input2.value) {
        showSuccess(confirmPassword)
    } else {
        showError(confirmPassword, 'password is not match')
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault()
    

    if (checkFill([email])) {
        checkEmail(email)
    }

    if (checkFill([userName])) {
        checkLength(userName, 3, 15)
    }

    if (checkFill([password])) {
        checkLength(password, 6, 25)
    }

    if (checkFill([confirmPassword])) {
        checkMatch(password, confirmPassword)
    }
    
})
