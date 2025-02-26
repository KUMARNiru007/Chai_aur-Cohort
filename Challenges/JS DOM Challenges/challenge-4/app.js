const taskInput = document.getElementById('taskInput')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')
const totalTask = document.getElementById('totalTasks')
const completedTask = document.getElementById('completedTasks')


function addTask() {

    const emptyList = taskList.querySelector('empyty-list')
    emptyList.remove()

    const li = document.createElement('li')
    li.className='task-list'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'complete-checkbox'

    const taskTask = document.createElement('p')
    taskTask.className = 'task-text'

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.innerText = 'Delete'

    checkbox.addEventListener('change' , function(){
        li.classList =
    })
}





addButton.addEventListener('click', function() {

    addTask()

})

