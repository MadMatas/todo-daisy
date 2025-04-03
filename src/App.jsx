import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './components/Hero'
import Tasks from './components/Tasks'
import NewTask from './components/NewTask'

function App() {
 const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);


 useEffect(() => {


  localStorage.setItem('tasks', JSON.stringify(tasks));

 }, [tasks]);

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      
      <NewTask setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
