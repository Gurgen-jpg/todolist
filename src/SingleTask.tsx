import React, {ChangeEvent} from 'react';
import {TaskType} from "./Todolist";


type SingleTaskPropsType = TaskType & {
    removeTask: (id: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void

}


const SingleTask = (props: SingleTaskPropsType) => {

    //let taskClass = props.isDone ? 'completed-task' : '';
    const removeTask = () => props.removeTask(props.id)

    let taskClass = `task  ${props.isDone ? 'task-completed' : ''}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.id, e.currentTarget.checked)
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={props.isDone}
                onChange={onChangeHandler}
            />
            <span className={taskClass}>{props.title}</span>
            <button onClick={removeTask}>x</button>
        </li>
    );
};

export default SingleTask;