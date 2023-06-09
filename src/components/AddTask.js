import { useRef, useState } from "react";
import "./AddTask.css";

export const AddTask = ({tasks, setTasks}) => {
    //const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    const taskRef = useRef("");

    // const handleChange = (event) => {
    //     taskRef.current.valueOf = "";
    // }

    const handleReset = () => {
        //setTaskValue("");
        setProgress(false)
        taskRef.current.value = "";
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // when onSubmit clicked, it won't refresh/reload the page
        const task = {
            id: Math.floor(Math.random() * 10000),
            //name: taskValue,
            name: taskRef.current.value,
            completed: Boolean(progress)
        };
        console.log(task);
        setTasks([...tasks, task])
        handleReset();
    }

    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                {/* <input onChange={(e) => setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" /> */}
                {/* <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue} /> */}
                <input type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" ref={taskRef} />
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <span onClick={handleReset} className="reset">Reset</span>
                <button type="submit">Add Task</button>
            </form>
            
            {/* we can't useRef to render this UI.  */}
            {/* <p>{taskValue} has {taskValue.length} length</p> */} 

        </section>
    )
}
