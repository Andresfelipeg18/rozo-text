const textArea = document.getElementById('taskinput')
const counter = document.getElementById('counter')
const mayuscula = document.getElementById('btn1')
const minuscula = document.getElementById('btn2')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')


function toUpperCase() {
    textArea.value = textArea.value.toUpperCase()
}

function toLowerCase() {
    textArea.value = textArea.value.toLowerCase()
}

mayuscula.addEventListener('click', toUpperCase)

minuscula.addEventListener('click', toLowerCase)

textArea.addEventListener('input', () => {
    let remaining = 255 - textArea.value.length;
    if (remaining < 0) {
        textArea.value = textArea.value.substring(0, 255)
        remaining = 0
    }
    counter.textContent = remaining;
    counter.style.color = remaining <= 50 ? "red" : "black"
});

function addTask() {
    const taskText = textArea.value.trim()
    if (taskText !== "") {
        const listItem = document.createElement('li')
        listItem.textContent = taskText

        const deleteButton = document.createElement('img')
        deleteButton.src = 'papelera-de-reciclaje.png' 
        deleteButton.alt = 'Eliminar tarea'
        deleteButton.style.cursor = 'pointer'
        deleteButton.style.marginLeft = '0.5rem'
        deleteButton.style.width = '20px' 

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem)
        });

       
       
        listItem.appendChild(deleteButton)

     
        taskList.appendChild(listItem)

        textArea.value = ""  
        counter.textContent = 255 
        counter.style.color = "black"  
    }
}

addTaskBtn.addEventListener('click', addTask)




