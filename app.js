// Define Ui Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// call function load all event listners
loadEventListeners();

// Function Load all Event Listeners

function loadEventListeners() {

    //Add Task Event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a Task');
    }

    //Create List Element
    const li = document.createElement('li');

    //Add Class Name
    li.className = 'collection-item';

    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link Element
    const link = document.createElement('a');

     //Add Class Name
     link.className = 'delete-item secondary-content';

     //Add icon html
     link.innerHTML = '<i class="fa fa-remove"></i>';

     //Append link to li
     li.appendChild(link);

     //Append li to ul
     taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}