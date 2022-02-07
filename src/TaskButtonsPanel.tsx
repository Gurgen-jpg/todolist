import React from 'react';
import {FilterValuesType} from "./App";

type TaskButtonsPanelType = {
    changeFilter: (filter: FilterValuesType) =>void
}

const TaskButtonsPanel = (props: TaskButtonsPanelType) => {
    return (
        <div>
            <button onClick={() => props.changeFilter("all")}>All</button>
            <button onClick={() => props.changeFilter("active")}>Active</button>
            <button onClick={() => props.changeFilter("completed")}>Completed</button>
        </div>
    );
};

export default TaskButtonsPanel;