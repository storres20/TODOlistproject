module.exports = function removebook(id) {
  /* remove from localStorage */
  const getremove = JSON.parse(localStorage.getItem('tasks'));

  const newArr = getremove.filter((object) => object.id !== id);

  /* reset index */
  newArr.sort((a, b) => a.index - b.index);

  newArr.forEach((item, index) => {
    item.index = index + 1;
  });

  /* update localstorage */
  localStorage.setItem('tasks', JSON.stringify(newArr));
};