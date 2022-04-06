import {FilterValuesType, TasksStateType, TodoListsType} from "../App";
import {v1} from "uuid";
import {AddTodoListAT, RemoveTodoListAT} from "./todolist-reducer";

export type removeTaskACType = {
    type: 'REMOVE-TASK'
    taskID: string
    todoListID: string
}

export type addTaskACType = {
    type: 'ADD-TASK'
    title: string
    todoListID: string
}
export type changeTaskStatusACType = {
    type: 'CHANGE-TASK-STATUS'
    taskID: string
    isDone: boolean
    todoListID: string
}
export type changeTaskTitleACType = {
    type: 'CHANGE-TASK-TITLE'
    taskID: string
    title: string
    todoListID: string
}

export type ActionType = removeTaskACType
    | addTaskACType
    | changeTaskStatusACType
    | changeTaskTitleACType
    | AddTodoListAT
    | RemoveTodoListAT
export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {...state, [action.todoListID]: state[action.todoListID].filter(task => task.id !== action.taskID)}
        case "ADD-TASK":
            return {
                ...state,
                [action.todoListID]: [{id: '4', title: 'juice', isDone: false}, ...state[action.todoListID]]
            }
        case "CHANGE-TASK-STATUS":
            return {
                ...state,
                [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ? {
                    ...t,
                    isDone: action.isDone
                } : {...t})
            }
        case 'CHANGE-TASK-TITLE':
            return {
                ...state,
                [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ? {
                    ...t,
                    title: action.title
                } : {...t})
            }
        case 'ADD-TODOLIST':
            return {
                ...state,
                [action.todoListId]: []
            }
        case "REMOVE-TODO-LIST":
            let newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state
    }
}

export const removeTaskAC = (taskID: string, todoListID: string): removeTaskACType => {
    return {
        type: "REMOVE-TASK",
        taskID,
        todoListID
    }
};
export const addTaskAC = (title: string, todoListID: string): addTaskACType => {
    return {
        type: 'ADD-TASK',
        title,
        todoListID
    }
};
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todoListID: string): changeTaskStatusACType => {
    return {
        type: 'CHANGE-TASK-STATUS',
        taskID,
        isDone,
        todoListID
    }
};
export const changeTaskTitleAC = (taskID: string, title: string, todoListID: string): changeTaskTitleACType => {
    return {
        type: 'CHANGE-TASK-TITLE',
        taskID,
        title,
        todoListID
    }
};
