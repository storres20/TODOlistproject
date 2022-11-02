import './style.css';
import './imgs/bg1.png';

const arrTodo = [
  {
    description: 'do homework',
    completed: true,
    index: 3,
  },
  {
    description: 'clean house',
    completed: true,
    index: 1,
  },
  {
    description: 'play soccer',
    completed: false,
    index: 2,
  },
];

const todoList = document.getElementById('todoList');

arrTodo.sort((a, b) => a.index - b.index);

arrTodo.forEach((item) => {
  todoList.innerHTML += `
    <div class="todoFlex">
      <div class="todoDiv">
        <input type="checkbox" name="check" id="" ${item.completed ? 'checked' : ''} >
        <p>${item.description}</p>
      </div>
      <i class="bi bi-three-dots-vertical"></i>
    </div>
  `;
});
