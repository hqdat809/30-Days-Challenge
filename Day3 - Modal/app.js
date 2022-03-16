const btnOpenModal = document.querySelector(".open__modal-btn")
const modal = document.querySelector(".modal")
const iconClose = document.querySelector(".modal__header i")
const btnClose = document.querySelector(".modal__footer button")

function toggleModal() {
    modal.classList.toggle("hide")
}

btnOpenModal.addEventListener("click", toggleModal)
iconClose.addEventListener("click", toggleModal)
btnClose.addEventListener("click", toggleModal)
modal.addEventListener("click", function(e) {
    if (e.target == e.currentTarget) {
        toggleModal()
    }
})