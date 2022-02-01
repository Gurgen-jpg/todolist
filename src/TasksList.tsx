import React from 'react';
import {TaskType} from "./Todolist";
import SingleTask from "./SingleTask";
import TaskButtonsPanel from "./TaskButtonsPanel";

type TaskListPropsType = {
    tasks: Array<TaskType>
}

const TasksList = (props: TaskListPropsType) => {
    return (
        <div>
            <div>
                <ul>
                    <SingleTask {...props.tasks[0]}/>
                    <SingleTask {...props.tasks[1]}/>
                    <SingleTask {...props.tasks[2]}/>
                </ul>
            </div>
            <TaskButtonsPanel/>
        </div>
    );
};

export default TasksList;