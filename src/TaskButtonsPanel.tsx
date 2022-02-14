import React from 'react';
import {FilterValuesType} from "./App";

type TaskButtonsPanelType = {
    changeFilter: (filter: FilterValuesType) =>void
}

const TaskButtonsPanel = (props: TaskButtonsPanelType) => {
    const onClickHandler = (filter: FilterValuesType) => () => {
      props.changeFilter(filter)
    }

    return (
        <div>
            <button onClick={onClickHandler("all")}>All</button>
            <button onClick={onClickHandler("active")}>Active</button>
            <button onClick={onClickHandler("completed")}>Completed</button>
        </div>
    );
};

export default TaskButtonsPanel;