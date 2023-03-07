import react from 'react';

const Display = (props) => {

    const { tasks, setTasks } = props
    console.log(Array.isArray(tasks))
    console.log(tasks)


    //delete function requires a parameter to IDENTIFY which task we want to delete...hence: task from map function
    const deleteTasks = (otherTasksFromMap) => {
        setTasks(tasks.filter(taskId => taskId !== otherTasksFromMap))
    }


    const checkedTasks = (otherTasksFromMap) => {
        //this line below acts as a way for us to toggle state whereas the line below that hard codes true no matter what
        otherTasksFromMap.checked = !otherTasksFromMap.checked
        // otherTasksFromMap.checked = true
        console.log(otherTasksFromMap.checked)
        //we must update state so that the page refreshes with the new styling on those checked elements
        setTasks([...tasks])
    }

    return (
        <div>
            {tasks.map((task, index) => {
                return (
                    <ul className="task-updater">
                        {
                        task.checked == false ?
                            <li className="flex" key={index}>{task.description}</li>:
                            <li style={{color: "red", textDecoration: "line-through"}} className="flex" key={index}>{task.description}</li>
                        }
                        <input className="flex" type="checkbox" onChange={() => checkedTasks(task)} />
                        <button className='flex red' onClick={() => deleteTasks(task)}>Delete</button>
                        {/* the button sends an argument to the deleteTasks function that acts like a 'this' keyword
                            like in JS...and then we compare the task we pressed the button of, to the rest of the tasks 
                            in the list (state) and lastly, we compare them, and delete the corresponding task */}
                    </ul>
                )
            })}
        </div>
    )
}

export default Display;