import { useState } from 'react';

export const TaskList = (props) => {
    const [tasks, setTasks] = useState(
        [
            {id: 5271, name: "Record React Lectures", completed: true},
            {id: 7825, name: "Edit React Lectures", completed: false},
            {id: 8391, name: "Warch Lectures", completed: false}
        ]
    );
    const [show, setShow] = useState(true);

    function handleDelete(id) {
        // we remove it by filter and the useState will be changed
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    return (
        <>
            <h1>Task List {props.title}</h1>
            <ul>
            <button onClick={() => setShow(!show)} className='trigger'>Toggle</button>
            {show && tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
                </li>
            ))}
            </ul>
        </>
    )
}
