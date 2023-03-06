import { useState } from 'react';

const Display = (props) => {

    const [checked, setChecked] = useState(false)

    console.log(props)
    const { tasks } = props
    console.log(tasks)

    const filterTodos = () => {
        setChecked(!checked)
        console.log(checked)
    }

    return (
        <div>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <div className="task-updater">
                            {
                                checked ?
                                <li style={{textDecoration: "line-through", color: "red"}} className="flex" key={index}>{task.charAt(0).toUpperCase() + task.slice(1)}</li>:
                                <li className="flex" key={index}>{task.charAt(0).toUpperCase() + task.slice(1)}</li>
                            }
                            <input className="flex" type="checkbox" onChange={filterTodos} />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Display;