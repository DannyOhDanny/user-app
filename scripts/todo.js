const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskListError = document.getElementById('taskListError');

// Добавление задачи и ее валидация, обработка ошибки

addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();

  const validCharacters = /^[а-яА-Я0-9.,!? ]{1,30}$/;

  if (taskText !== '' && validCharacters.test(taskText)) {
    const taskItem = document.createElement('li');
    taskItem.id = 'list-item';
    taskItem.className = 'list-item';

    taskItem.textContent = taskText;
    taskListError.textContent = '';

    taskItem.addEventListener('click', function () {
      taskItem.classList.add('list-item');

      taskItem.classList.toggle('completed');
    });

    taskItem.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
  } else {
    taskListError.textContent = 'Добавьте задачу или используйте кириллицу ';
  }
});

taskInput.addEventListener('blur', function () {
  taskListError.textContent = '';
});

taskInput.addEventListener('focus', function () {
  taskListError.textContent = '';
});

// Обработка информирования об удалении и завершении задачи

function hideTooltip() {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => tooltip.remove());
}

function showTooltip(element, text) {
  const tooltip = document.createElement('p');
  tooltip.id = 'tooltip';
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  element.appendChild(tooltip);
}

document.addEventListener('mouseover', function (event) {
  const target = event.target;
  if (target.classList.contains('list-item')) {
    if (target.classList.contains('completed')) {
      showTooltip(target, 'Удалить задачу - клик правой кнопкой мыши');
    } else {
      showTooltip(target, 'Завершить задачу - клик левой кнопкой мыши');
    }
  }
});

document.addEventListener('mouseout', function (event) {
  const target = event.target;

  if (target.classList.contains('list-item')) {
    hideTooltip();
  }
});
