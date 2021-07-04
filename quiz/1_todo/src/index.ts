let todoItems: Array<TodoInter>;

interface TodoInter {
  id: number;
  title: string;
  done: boolean;
}

// api
function fetchTodoItems(): Array<TodoInter> {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Array<TodoInter> {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: TodoInter): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoInter): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): TodoInter {
  return todoItems[0];
}

function showCompleted(): Array<TodoInter> {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  addTodo({ id: 4, title: '4번째', done: false });
  addTodo({ id: 5, title: '5번째', done: false });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
