// ## Challenge 4: Task Management 🧏🏻‍♂️

// ### Task Management

// - Allow users to add a new task by typing into an input field and clicking the "Add" button or pressing Enter.
// - Display each task in a list with a checkbox and a delete button.
// - Users should be able to remove tasks by clicking the "Delete" button.

// ### Task Completion

// - Users should be able to mark tasks as completed by clicking the checkbox next to a task.
// - Completed tasks should be visually distinct (e.g., strikethrough text and a different color).
// - Users should be able to uncheck a completed task, reverting it to an incomplete state.

// ### Task List State

// - If there are no tasks, display a message: "No tasks yet. Add one above!"
// - This message should disappear once a task is added.
// - If all tasks are deleted, the message should reappear.

// ### Task Statistics

// - Display the total number of tasks.
// - Show the number of completed tasks.
// - These statistics should update dynamically as tasks are added, completed, or deleted.


const taskInput = document.getElementById('taskInput')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')
const totalTasks = document.getElementById('totalTasks')
const completedTasks = document.getElementById('completedTasks')

let count = 0
function newTask(){

    if(!taskInput.value.trim()){
        return
    }
 
    if(count === 0){
     taskList.querySelector('.empty-list').remove()
     count ++
    }
    const value = taskInput.value.trim()

    const li = document.createElement('li')
    li.classList.add('task-item')


    const taskSpan = document.createElement('span')
    taskSpan.classList.add('task-text')
    taskSpan.innerText = value
     
    const checkBox=document.createElement('input')
    checkBox.type= 'checkbox'
    checkBox.classList.add('complete-checkbox')

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerText= 'Delete'

    checkBox.addEventListener('change', () => {
        li.classList.toggle('completed')
        updateTask()
    })

    deleteButton.addEventListener('click', () => {
        li.remove()
        updateTask()

        if (taskList.children.length === 0) {
            const emptyList = document.createElement('li')
            emptyList.classList.add('empty-list')
            emptyList.innerText = 'No tasks yet. Add one above!'
            taskList.appendChild(emptyList)
            count = 0
        }
    })

    taskList.appendChild(li)
    li.appendChild(checkBox)
    li.appendChild(taskSpan)
    li.appendChild(deleteButton)

    taskInput.value = ''

    updateTask()

     
}

function updateTask(){
    const total = taskList.querySelectorAll('.task-item').length

    const totalCompleted = taskList.querySelectorAll('.task-item.completed').length

    totalTasks.innerText = `Total tasks: ${total}`

    completedTasks.innerText = `Completed: ${totalCompleted}`
}

addButton.addEventListener('click', newTask)

taskInput.addEventListener('keypress', (event)=> {
    if(event.key === 'Enter') {
        newTask()
    }
})

updateTask()
