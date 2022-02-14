import React from 'react';
import AddTask from "./AddTask";

type TodolistHeaderPropsType = {
    title: string
    addTask : (title: string) => void
}

const TodolistHeader = (props: TodolistHeaderPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <AddTask addTask={props.addTask}/>
        </div>
    );
};

export default TodolistHeader;