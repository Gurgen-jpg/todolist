import React from 'react';

type TodolistHeaderPropsType = {
    title:string
}

const TodolistHeader = (props: TodolistHeaderPropsType) => {
    return (
        <h3>{props.title}</h3>
    );
};

export default TodolistHeader;