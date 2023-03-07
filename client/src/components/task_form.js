import { useState } from 'react';

const Form = (props) => {

    const [singleTask, setSingleTask] = useState("");
    const { tasks, setTasks } = props

    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {description: singleTask, checked: false }])
        setSingleTask("")
    }

    return (
        <div>
            <h1>Todo List</h1>
            <h2>Create a task</h2>
            <form onSubmit={submitHandler}>
                <label>Task: </label>
                <input type="text" value={singleTask} onChange={(e) => { setSingleTask(e.target.value) }} />
                {singleTask.length >= 3 ? <input type="submit" value="Add Task" /> : <input type="submit" value="Add Task" disabled/>}
            </form>
        </div>
    )
}

export default Form;