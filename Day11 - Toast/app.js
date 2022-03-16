const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var toasts = $('.toasts')
var btns = $$('.wrapper button')

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        showToastMessage(e.target.getAttribute('class'))

    })
});

var toastElement = {
    success: {
        icon: `<i class="fa-solid fa-circle-check"></i>`,
        msg: 'This is a success message'
    },
    warning: {
        icon: `<i class="fa-solid fa-circle-exclamation"></i>`,
        msg: 'This is a warning message'
    },
    error: {
        icon: `<i class="fa-solid fa-triangle-exclamation"></i>`,
        msg: 'This is a error message'
    }
}

function showToastMessage(status) {
    let toast = document.createElement('div')
    toast.className = `toast ${status}`
    toast.innerHTML = `
        ${toastElement[status].icon}
        <span class="success-msg">${toastElement[status].msg}</span>
        <span class="countdown"></span>
    `

    toasts.appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'slide_hide 1s ease forwards'
    }, 4000)

    setTimeout(() => {
        toast.remove()
    }, 6000)
}
