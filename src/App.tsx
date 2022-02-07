import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"


function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title:'HTML', isDone: true},
        {id: 2, title:'CSS', isDone: true},
        {id: 3, title:'JS', isDone: false},
        {id: 4, title:'JS', isDone: false},
        {id: 5, title:'JS', isDone: false}
    ])
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all"
        )


    const removeTask = (taskID: number) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
    }

    const changeFilter = (filter: FilterValuesType
    ) => {
        setFilter(filter)

    }

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(task => task.isDone)
            case "active":
                return  tasks.filter(task => !task.isDone)
            default:
                return tasks
        }
    }

    const filteredTasksForRender = getFilteredTasksForRender()

    return (
        <div className="App">
            <Todolist
                title={"What ot learn"}
                tasks={filteredTasksForRender}
                removeTask = {removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
