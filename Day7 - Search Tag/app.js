var input = document.querySelector(".content input")
var content = document.querySelector(".content")
var btnRemoveAll = document.querySelector(".btn_remove_all")

var tags = ["Reactjs", "Angular"]

function render() {
    content.innerHTML = ""
    for (let i = 0; i < tags.length; i++) {
        content.innerHTML += `<li>
                                ${tags[i]}
                                <i class="fa-solid fa-xmark" onclick = "removeTag(${i})"></i>
                            </li>`
        
    }

    content.appendChild(input)
    input.focus()
}

render()

input.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        tags.push(input.value.trim())
        render()
        input.value = ""
    }
})

function removeTag(index) {
    tags.splice(index, 1)
    render()
}

btnRemoveAll.addEventListener("click", function () {
    tags = []
    render()
})

