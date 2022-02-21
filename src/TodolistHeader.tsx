import React from 'react';
import AddTask from "./AddTask";
import {FilterValuesType} from "./App";

type TodolistHeaderPropsType = {
    title: string
    addTask : (title: string) => void
   // filter: FilterValuesType
}

const TodolistHeader = (props: TodolistHeaderPropsType) => {
  /*  let text = 'all'
    switch (props.filter) {
        case 'active':
            text = 'act'
            break;
        case "completed":
            text ='comp'
            break;
    }*/

    return (
        <div>
            <h3>{props.title}</h3>
            <AddTask addTask={props.addTask}/>
        </div>
    );
};

export default TodolistHeader;