import React from 'react';
import {FilterValuesType} from "./App";

type TaskButtonsPanelType = {
    changeFilter: (filter: FilterValuesType) =>void
    filter: FilterValuesType
}

const TaskButtonsPanel = (props: TaskButtonsPanelType) => {
    const onClickHandler = (filter: FilterValuesType) => () => {
      props.changeFilter(filter)
    }

    return (
        <div>
            <button
                className={props.filter ==='all' ? 'button-active' : ''}
                onClick={onClickHandler("all")}>All</button>
            <button
                className={props.filter ==='active' ? 'button-active' : ''}
                onClick={onClickHandler("active")}>Active</button>
            <button
                className={props.filter ==='completed' ? 'button-active' : ''}
                onClick={onClickHandler("completed")}>Completed</button>
        </div>
    );
};

export default TaskButtonsPanel;