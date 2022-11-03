const todoList = document.getElementById('todoList');

module.exports = function edittask() {
  todoList.addEventListener('change', (e) => {
    const etask = e.target;

    if (e.target.classList.contains('todoP')) {
      const newValue = etask.value; // new value
      const idedit = etask.attributes.name.value; // id

      const getedit = JSON.parse(localStorage.getItem('tasks'));

      getedit.forEach((item) => {
        if (item.id === idedit) {
          item.description = newValue;
        }
      });

      localStorage.setItem('tasks', JSON.stringify(getedit));
    }
  });
};