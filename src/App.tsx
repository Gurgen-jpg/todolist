import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"


function App() {
    console.log((v1))

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: true },
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'JS', isDone: false}
    ])
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

    //удаление задачи
    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        /* //создание задачи
         const newTask: TaskType = {
             id: v1(), title: title, isDone: false
         }
         //содали копию массива и обновили стейт
         const updatedTasks = [newTask, ...tasks]*/
        setTasks([{id: v1(), title: title, isDone: false},...tasks])
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks((tasks.map((t => t.id === taskID ? {...t, isDone: !t.isDone} : t ))))
    }

    // фильтрация задачи
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
//добавление задачи

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(task => task.isDone)
            case "active":
                return tasks.filter(task => !task.isDone)
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
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                filter={filter}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
