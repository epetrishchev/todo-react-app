import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoitem/TodoItem';

function App() {

  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div >
  );
}

export default App;
