
import { useState, useReducer } from "react";
import Tasks from "./Tasks";

export const ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task'
}

// Function to add new task
const newTask = (name, date) => {
    return{id:Date.now(), name: name, date: date, complete:false};
  
 } 

const reducer = (tasks, action) => {
    switch (action.type){
        case ACTIONS.ADD_TASK:
            return [...tasks, newTask(action.payload.name, action.payload.date)]
        case ACTIONS.DELETE_TASK:
            return tasks.filter(task => task.id !== action.payload.id)
        default:
            return tasks
    }
}

const Form = () => {
    const [submit, setSubmit] = useState(false)  
    const [tasks, dispatch ] = useReducer(reducer, [])
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [showTask, setShowTask] = useState(false)   
   
    
    
    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(true);
        dispatch({type:ACTIONS.ADD_TASK, payload: {name: name, date: date}});
        setDate('');
        setName('');
        setShowTask(true);
        setTimeout(() => {
            setSubmit(false);
            
        }, 3500)
        console.log(tasks);
    }
  return (
    <>
        {/* pops up when the form is submitted  */}
        { submit && <h3 style={{textAlign: 'center'}}> You've added a task successfully 😉👊</h3> }

        <form className="add-modal" onSubmit={handleSubmit}>
                <h4>Add Task</h4>
                <div className="input-wrap">
                    <label htmlFor="task-name">
                        Task Name
                    </label>
                    <input type="text" id="task-name" name="name" value={name}  onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className="input-wrap">
                    <label htmlFor="date">
                        Due date
                    </label>
                    <input type="date" id="date" min="2023-09-03" name="date" value={date}  onChange={e => setDate(e.target.value)} required/>
                </div>
                <button type="submit"  className="add_btn">Add</button>
        </form>
        {showTask &&
        <section className="add-modal">
            <h4>Task List</h4>
            {tasks.map(task => {
                return <Tasks key ={task.id} task={task} dispatch={dispatch} />
            })

            }
            
        </section>
        }
    </>
  )
}

export default Form