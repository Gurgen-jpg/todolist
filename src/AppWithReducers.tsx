import React, {useReducer} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {ChangeTodoListAC, RemoveTodoListAC, todolistReducer} from "./store/todolist-reducer";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer} from "./store/tasks-reducer";

export type FilterValuesType = "all" | "active" | "completed";
export type TodoListsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
export type TasksStateType = { [key: string]: Array<TaskType> }

export function AppWithReducers() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, dispatchTodolists] = useReducer(todolistReducer, [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, dispatchTasks] = useReducer(tasksReducer, {
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    const removeTask = (todoListID: string, id: string) => {
        let action = removeTaskAC(id, todoListID)
        dispatchTasks(action)
    }


    function addTask(todoListID: string, title: string) {
        dispatchTasks(addTaskAC(title, todoListID))
    }

    function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
        dispatchTasks(changeTaskStatusAC(taskId, isDone, todoListID))

    }


    function changeFilter(todoListID: string, value: FilterValuesType) {
        dispatchTodolists(ChangeTodoListAC(todoListID, value))
    }


    const removeTodoList = (todoListID: string) => {
        dispatchTodolists(RemoveTodoListAC(todoListID))
        dispatchTasks(RemoveTodoListAC(todoListID))
    }


    return (
        <div className="App">
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id];

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist todoListID={el.id}
                              key={el.id}
                              title={el.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={el.filter}
                              removeTodoList={removeTodoList}
                    />
                )
            })}
        </div>
    );
}

