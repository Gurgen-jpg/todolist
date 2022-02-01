import React from 'react';
import TodolistHeader from "./TodolistHeader";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import TaskButtonsPanel from "./TaskButtonsPanel";

type TodolistPropsType = {
    title: string,
    tasks: Array<TaskType>
}
export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <TodolistHeader title={props.title}/>

            <TasksList tasks={props.tasks}/>

        </div>
    );
};

export default Todolist;