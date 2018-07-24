function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    newLi.classList.add('mdl-list__item')

    // create a new input
    let checkbox = document.createElement('input');

    let label = document.createElement('label');

    let span = document.createElement('span');

    label.classList.add('mdl-checkbox');
    label.classList.add('mdl-js-checkbox');
    label.classList.add('mdl-js-ripple-effect');

    checkbox.classList.add('checkbox');
    checkbox.classList.add('mdl-checkbox__input');

    span.textContent = title;

    let deleteButton = document.createElement('button');


    deleteButton.classList.add('deleteButton');
    deleteButton.classList.add('mdl-button');
    deleteButton.classList.add('mdl-js-button');
    deleteButton.classList.add('mdl-button--raised');
    deleteButton.classList.add('mdl-button--colored');


    deleteButton.textContent = "delete";
    deleteButton.addEventListener('click', () => {
      toDoList.removeChild(newLi)
    });

    label.appendChild(checkbox);
    label.appendChild(span);
    label.appendChild(deleteButton)

    // set the input's type to checkbox
    checkbox.type = "checkbox";

     // attach the checkbox to the li
     newLi.appendChild(label);

     // attach the li to the ul
    toDoList.appendChild(newLi);

      //empty the input
     newToDoText.value = '';


   });

}

window.onload = function() {
  onReady();
};
