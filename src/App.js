import './App.css';
import { useState } from 'react';
import './App.css'
import Add from './components/Add';
import { Data } from './Data';
import Todolist from './components/Todolist';

function App() {
  const [tasks, setTasks] = useState(Data)
  const handleDelete=(x)=>setTasks(tasks.filter(el=>el.id!==x))
  const handleComplete=(y)=>setTasks(tasks.map(el=>el.id===y?{...el,isDone:!el.isDone}:el))
  const handleAdd=(h)=>{
    const newTask={
      id:Math.random(),action:h,isDone:false
    }
    setTasks([...tasks,newTask])
  }
  return (
    <div className="App">
      <Add add={handleAdd} />
      <Todolist tasks={tasks} del={handleDelete} comp={handleComplete}/>
      
    </div>
  );
}

export default App;
