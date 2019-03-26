// defining UI variable
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask)
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

  // clear input
  taskInput.value = ''
  }else{
    alert('please input ur to do list')
  }


}