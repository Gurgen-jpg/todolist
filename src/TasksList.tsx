import React from 'react';
import {TaskType} from "./Todolist";
import SingleTask from "./SingleTask";
import TaskButtonsPanel from "./TaskButtonsPanel";
import {FilterValuesType} from "./App";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const TasksList = (props: TaskListPropsType) => {
    /* const tasksComponents = props.tasks.map(task => <SingleTask {...task}/>)*/

    const taskComponentList = props.tasks.map(task =>
        <SingleTask
            key={task.id}
            {...task}
            removeTask={props.removeTask}
            changeTaskStatus={props.changeTaskStatus}
        />)

    const tasksLists = taskComponentList.length ?
        <ul>
            {taskComponentList}
        </ul>
        : <span>'Task list is empty. Please add task!'</span>

    return (
        <div>{tasksLists}


            <TaskButtonsPanel
                changeFilter={props.changeFilter}
                filter={props.filter}/>
        </div>
    );
};

export default TasksList;