const todoList = document.getElementById('todoList');

module.exports = function addtask(boo) {
  todoList.innerHTML += `
    <div class="todoFlex">
      <div class="todoDiv">
        <input type="checkbox" name="${boo.id}" class="checkbox" ${boo.completed ? 'checked' : ''} >
        <input class="todoP" name="${boo.id}" value="${boo.description}" >
      </div>
      <i class="bi bi-three-dots-vertical dots"></i>
    </div>
  `;

  if (localStorage.getItem('tasks') === null) {
    const tasks = [];
    tasks.push(boo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(boo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};