'use strict';
const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};
// axios 使う フロントから繋ぐ
const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.innerText = '削除';
  removeButton.addEventListener('click', () => removeTask(removeButton));
  listItem.innerText = task;
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
  
  fetch('http://127.0.0.1:4567')
  .then(data => console.log(data));
};

addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});