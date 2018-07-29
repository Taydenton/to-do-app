function onReady() {
  var toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  const savedToDos = localStorage.getItem('savedToDos');
  if (savedToDos != null) {
    toDos = JSON.parse(savedToDos);
  }

  let id = 0

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
    newToDoText.value = '';

    saveToDos();

    renderTheUI();
  }

  function saveToDos() {
    localStorage.setItem('savedToDos', JSON.stringify(toDos));
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');


      checkbox.checked = toDo.complete
      checkbox.addEventListener('change', event => {
        toDo.complete = checkbox.checked
        saveToDos();
      })
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "delete";

      deleteButton.addEventListener('click', event => {
        toDoList.removeChild(newLi);
        toDos = toDos.filter(toDoItem => toDoItem.id != toDo.id);
        saveToDos();
        renderTheUI();
      });


      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
