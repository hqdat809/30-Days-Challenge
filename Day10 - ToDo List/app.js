var input = document.querySelector('input')
var btnAdd = document.querySelector('button')
var form = document.querySelector('form')
var list = document.querySelector('.todoList')


var todoLists = JSON.parse(localStorage.getItem('todoList'))
if (todoLists) {
    todoLists.forEach(item => {
        addTodoList(item)
    })
}


function addTodoList(todo) {
    var li = document.createElement('li')

    li.setAttribute('class', todo.completed ? "completed" : "")

    li.innerHTML = `
            
                <span>${todo.text}</span>
                <i class="fa-solid fa-trash"></i>
           
    `

    list.appendChild(li)
    updateTodoList()

    li.querySelector('i').addEventListener('click', function() {
        list.removeChild(this.parentElement)
        updateTodoList()
    })

    li.addEventListener('click', function() {
        this.classList.toggle('completed')
        updateTodoList()
    })
}

function updateTodoList() {
    let todos = document.querySelectorAll('.todoList li') 
    let todoList = []
    todos.forEach(item => {
        todoList.push({
            text : item.querySelector('span').innerText,
            completed : item.className ? true : false
        })
    })
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    addTodoList({
        text: input.value,
        completed: false
    })
    input.value = ""
})



