import React from 'react';
import AddTask from "./AddTask";

type TodolistHeaderPropsType = {
    title: string
}

const TodolistHeader = (props: TodolistHeaderPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <AddTask/>
        </div>
    );
};

export default TodolistHeader;