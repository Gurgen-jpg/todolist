import React from 'react';
import {TaskType} from "./Todolist";
import SingleTask from "./SingleTask";
import TaskButtonsPanel from "./TaskButtonsPanel";
import {FilterValuesType} from "./App";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

const TasksList = (props: TaskListPropsType) => {
    /* const tasksComponents = props.tasks.map(task => <SingleTask {...task}/>)*/

    return (
        <div>
            <div>
                <ul>
                    {props.tasks.map(task =>
                        <SingleTask
                            key={task.id}
                            {...task}
                            removeTask={props.removeTask}
                        />)}
                </ul>
            </div>
            <TaskButtonsPanel changeFilter={props.changeFilter}/>
        </div>
    );
};

export default TasksList;