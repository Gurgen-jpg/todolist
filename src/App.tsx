import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

function App() {
    const task_1: Array<TaskType> = [
        {id: 1, title:'HTML', isDone: true},
        {id: 2, title:'CSS', isDone: true},
        {id: 3, title:'JS', isDone: false}
    ]
    const task_2: Array<TaskType> = [
        {id: 1, title:'Jumanji', isDone: true},
        {id: 2, title:'Rambo', isDone: true},
        {id: 3, title:'Terminator', isDone: false}
    ]
    const task_3: Array<TaskType> = [
        {id: 1, title:'O`Reilly', isDone: true},
        {id: 2, title:'Haverbeke', isDone: false},
        {id: 3, title:'Flanagan', isDone: true}
    ]
    return (
        <div className="App">
            <Todolist title={"What ot learn"} tasks={task_1}/>
            <Todolist title={"Films i'd like to watch"} tasks={task_2}/>
            <Todolist title={"What to read about JS& React"} tasks={task_3}/>

        </div>
    );
}

export default App;
