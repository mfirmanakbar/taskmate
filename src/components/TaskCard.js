import "./TaskCard.css";

// SIMPLE SOLUTION
export const TaskCard = ({task, handleDelete, info}) => {
    return (
      <div className="taskcard">
          <li className={task.completed ? 'completed' : 'incomplete'}>
              <span>{task.id} - {task.name} - {info}</span>
              <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
      </div>
    )
}

// LONG SOLUTION
// export const TaskCard = (props) => {
//   return (
//     <>
//         <li className={props.task.completed ? 'completed' : 'incomplete'}>
//             <span>{props.task.id} - {props.task.name}</span>
//             <button className='delete' onClick={() => props.handleDelete(props.task.id)}>Delete</button>
//         </li>
//     </>
//   )
// }
