import logo from './logo.svg';
import './App.css';
import AddNewTask from './Components/AddNewTask';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <AddNewTask/>
      <TaskList/>
    </div>
  );
}

export default App;
