let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
remember("milk");
remember("sugar");
remember("bread");
console.log(todoList);
console.log(getTask());
console.log(todoList);
rememberUrgently("whiskey");
console.log(todoList);
