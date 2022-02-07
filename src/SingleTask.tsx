import React from 'react';
import {TaskType} from "./Todolist";


type SingleTaskPropsType = TaskType & {
    removeTask:  (id: number)=> void

}


const SingleTask = (props:  SingleTaskPropsType) => {
    return (
        <li>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={() => props.removeTask(props.id)}>x</button>
        </li>
    );
};

export default SingleTask;