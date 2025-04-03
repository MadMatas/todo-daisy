import { useState } from "react"


export default function NewTask({setTasks}) {
    const [task, setTask] = useState('');


    function addTask() {
        setTasks((oldTasks) => { return [...oldTasks, {task: task, done: false}]});
    }
        return (
            <>
            <input type="text" placeholder="Type here" className="input" value={task} onChange={(event) => {setTask(event.target.value)}} />
                <button className="btn" onClick={addTask}>Add</button>
            </>
        )
    


}