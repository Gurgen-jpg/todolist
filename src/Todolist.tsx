import React from 'react';
import TodolistHeader from "./TodolistHeader";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import TaskButtonsPanel from "./TaskButtonsPanel";
import {FilterValuesType} from "./App";
import addTask from "./AddTask";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean

}

const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <TodolistHeader
                title={props.title}
                addTask={props.addTask}
            />
            <TasksList
                tasks={props.tasks}
                removeTask={props.removeTask}
                changeFilter={props.changeFilter}
                filter={props.filter}
                changeTaskStatus={props.changeTaskStatus}
            />
        </div>
    );
};

export default Todolist;