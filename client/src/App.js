import Form from './components/task_form';
import Display from './components/task_display';
import './App.css';
import {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {description: "Make a task", checked: false}
  ])

  return (
    <div className="App">
      <Form tasks={tasks} setTasks={setTasks} />
      <Display tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
