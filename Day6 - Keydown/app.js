var eKey = document.querySelector(".key .card-content")
var eLocation = document.querySelector(".location .card-content")
var eWhich = document.querySelector(".which .card-content")
var eCode = document.querySelector(".code .card-content")
var result = document.querySelector(".result")
var box = document.querySelector(".box")
var alert = document.querySelector(".alert")

document.addEventListener("keydown", e => {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerText = e.which

    alert.classList.add("hide")
    box.classList.remove('hide')
})