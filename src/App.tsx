import React, {useState} from 'react';
import ToDoList from './Components/ToDoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]) ;

  const addTodoHandler = (text : string) =>{
    setTodos(prevTodos => [...prevTodos, {id:Math.random().toString(), text: text}]);
  };

  const deleteTodoHandler = (id: string) =>{
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddHandler = {addTodoHandler} />
      <ToDoList items = {todos} onDeleteHandler = {deleteTodoHandler}/>
    </div>
  );
}

export default App;
