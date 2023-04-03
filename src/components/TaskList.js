import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = (props) => { // bisa juga langsung => export const TaskList = (title, info)
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
                {
                    show && tasks.map((task) => (
                        <TaskCard task={task} handleDelete={handleDelete} key={task.id} info={props.info} />
                    ))
                }
            </ul>

            <BoxCard result="success">
                <p className='title'>Title</p>
                <p className='description'>Description</p>
            </BoxCard>
            <BoxCard result="warning">
                <p className='title'>Title</p>
                <p className='description'>Description</p>
            </BoxCard>
            <BoxCard result="alert">
                <p className='title'>Title</p>
                <p className='description'>Description</p>
            </BoxCard>
        </>
    )
}
