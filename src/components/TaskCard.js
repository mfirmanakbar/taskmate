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

// SIMPLE SOLUTION
export const TaskCard = ({task, handleDelete}) => {
    return (
      <>
          <li className={task.completed ? 'completed' : 'incomplete'}>
              <span>{task.id} - {task.name}</span>
              <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
      </>
    )
}