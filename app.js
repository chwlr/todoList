// defining UI variable
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask)
  taskList.addEventListener('click', removeTask)
  clearBtn.addEventListener('click', clearTask)
  filter.addEventListener('keyup', filterTask)
}

function addTask(e){
  e.preventDefault()
  //create li element
  if(taskInput.value){
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value))

  //create a element
  const link = document.createElement('a')
  link.href = '#'
  link.className = 'delete-item secondary-content'
  link.innerHTML = '<i class="fas fa-trash"></i>'

  //final element (li) + (link)
  li.appendChild(link)

  //inject final element
  taskList.appendChild(li)
  storeTaskInLocalStorage(taskInput.value)
  // clear input
  taskInput.value = ''
  }else{
    alert('please input ur to do list')
  }
}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('delete ?')){
      e.target.parentElement.parentElement.remove()
      removeTaskInLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

function clearTask(e){
  if(confirm('delete?')){
    taskList.innerHTML = 'please add ur task'
  }
}

function filterTask(e){
  const keyWord = e.target.value.toLowerCase()
  const todos = document.querySelectorAll('.collection-item')

  todos.forEach(function(todo) {
    const valueContent = todo.firstChild.textContent.toLowerCase()
    if(valueContent.indexOf(keyWord) !== -1 ){
      todo.style.display = 'block'
    }else{
      todo.style.display = 'none'
    }
  })

}


function storeTaskInLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTaskInLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
}