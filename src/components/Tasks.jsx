import DeleteIcon from './DeleteIcon'
import { ACTIONS } from "./Form"
const Tasks = ({ task, dispatch }) => {
  return (
   <>
    {/* Implementing the list */}
        <ul >

            <li>
            
                <a  className="task-dets" style={{color: task.complete ? ' #af017' : 'white'}}>
                    <h5>{task.name}</h5>
                    <p>{task.date}</p>
                </a>
                <DeleteIcon onClick= {() => {dispatch({type:ACTIONS.DELETE_TASK, payload :{id:task.id}})}}/>
                
            </li>      

        </ul>
   </>
  )
}

export default Tasks