const addBtn =document.getElementById('add-btn')
const todoInput =document.getElementById('todo-input')
const todoItemsContainer =document.getElementById('todo-items-cont')

addBtn.addEventListener('click', () => {
    const value =todoInput.value;

    const li =document.createElement('li') // creatre a new li tag to be added
    li.innerText = value  ; //will take the value in the li tag 

    const delButton =document.createElement('button') //creating the X button
    delButton.innerText = 'X';  //value for the button

    delButton.addEventListener('click',() => {
        li.remove();
    })



    li.appendChild(delButton)

    todoItemsContainer.appendChild(li);
    todoInput.value='';

})