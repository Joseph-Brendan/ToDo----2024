let form = document.getElementById("form")
let todoInput = document.getElementById("todo-input")
let todoItemContainer = document.getElementById("todo-item-container")

// Array collecting all todo Item Object Literals
let todoItemsArray = []

// Collecting todo from todo input field
form.addEventListener("submit", collectTodo)
function collectTodo(event){
    event.preventDefault()
    let todoInputValue = todoInput.value
    
    if(todoInputValue.length === 0){
        alert("Enter A Todo Item")
    }else{
        const todoObjectLiteral = {
            todoItemEntered : todoInputValue,
            completed : false
        }
        // Push the todo object into the todo items array
        todoItemsArray.push(todoObjectLiteral)
    }
    // Send todo object literals to local storage
    localStorage.setItem("todos", JSON.stringify(todoItemsArray))
    form.reset()
    fetchTodoItems()
    showTodosOnUI()
}


// Fetch todo items from local storage
function fetchTodoItems(){
    if(localStorage.getItem("todos")){
        todoItemsArray = JSON.parse(localStorage.getItem("todos"))
    }
    showTodosOnUI()
}
fetchTodoItems()


// Show Todo Items on UI
function showTodosOnUI(){
    todoItemContainer.innerHTML = ``
    todoItemsArray.forEach(function(todoItem){
        let todoToBePrinted = todoItem.todoItemEntered
        
        let todoItemDiv = document.createElement("div")
        todoItemDiv.classList.add("todo-item")

        let leftSideDiv = document.createElement("div")
        leftSideDiv.classList.add("left-side")

        let unCheckedIcon = document.createElement("i")
        unCheckedIcon.classList.add("fa-regular", "fa-circle")

        let checkedIcon = document.createElement("i")
        checkedIcon.classList.add("fa-solid", "fa-circle-check")

        let todoText = document.createElement("p")
        todoText.textContent = todoToBePrinted

        let rightSideDiv = document.createElement("div")
        rightSideDiv.classList.add("right-side")

        let editIcon = document.createElement("i")
        editIcon.classList.add("fa-solid" , "fa-pen")

        let deleteicon = document.createElement("i")
        deleteicon.classList.add("fa-solid", "fa-trash")


        if(!todoItem.completed){
            leftSideDiv.append(unCheckedIcon, todoText)
            rightSideDiv.append(editIcon, deleteicon)
            todoItemDiv.append(leftSideDiv, rightSideDiv)
            todoItemContainer.append(todoItemDiv)
        }else{
            leftSideDiv.append(checkedIcon, todoText)
            rightSideDiv.append(editIcon, deleteicon)
            todoItemDiv.append(leftSideDiv, rightSideDiv)
            todoItemContainer.append(todoItemDiv)
        }
    })
}
