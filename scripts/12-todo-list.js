const todoList = [{
  name: 'watch youtube',
  dueDate: '2022-12-22'
}, {
  name: 'take a shower',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';


  todoList.forEach( (todoObject, index) => {
    const { name, dueDate } = todoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button" >Delete</button>
    `; //we use .splice() to remove array and update array
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1); 
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    // name: name, 
    // dueDate: dueDate
    name, // we use shorthand property
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}