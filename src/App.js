import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoitem/TodoItem';
import TasksData from './Data';

function App() {
  const taskComponents = TasksData.map(task => <TodoItem key={task.id} text={task.text} />)
  return (
    <div>
      {taskComponents}
    </div>
  )
}

export default App;
