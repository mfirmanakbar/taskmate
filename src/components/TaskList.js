import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./TaskList.css";

export const TaskList = ({title, info, tasks, setTasks}) => {
    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id)); // we remove it by filter and the useState will be changed
    }
    
    return (
        <section className='tasklist'>
            <ul>
                <div className='header'>
                    <h1>Task List {title}</h1>
                    <button onClick={() => setShow(!show)} className='trigger'>Toggle</button>
                </div>
                {
                    show && tasks.map((task) => (
                        <TaskCard task={task} handleDelete={handleDelete} key={task.id} info={info} />
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
        </section>
    )
}
