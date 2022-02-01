import React from 'react';
import {TaskType} from "./Todolist";



const SingleTask = (props:TaskType) => {
    return (
        <div>
            <input type="checkbox" checked={props.isDone}/> <span>{props.title}</span>
        </div>
    );
};

export default SingleTask;