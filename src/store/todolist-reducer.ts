import {FilterValuesType, TodoListsType} from "../App";
import {v1} from "uuid";

export type RemoveTodoListAT = {
    type: "REMOVE-TODO-LIST"
    id: string
}

export type AddTodoListAT = {
    type: "ADD-TODOLIST"
    newTitle: string
    todoListId: string
}

export type ChangeTodoListAT = {
    type: "CHANGE-TODO-FILTER"
    id: string
    filter: FilterValuesType
}

export type ChangeTodoListTitleAT = {
    title: string
    id: string
    type: "CHANGE-TODOLIST-TITLE"
}



export type ActionType = RemoveTodoListAT | AddTodoListAT | ChangeTodoListAT | ChangeTodoListTitleAT

const initialState:Array<TodoListsType> = []

export const todolistReducer = (state: Array<TodoListsType> = initialState, action: ActionType): Array<TodoListsType> => {
    switch (action.type) {
        case "REMOVE-TODO-LIST":
            return state.filter(tl => tl.id !== action.id)
        case "ADD-TODOLIST":
            return [...state,
                {id: action.todoListId, title: action.newTitle, filter: "all"}
            ]
        case "CHANGE-TODO-FILTER":
            return state.map(el => el.id === action.id ? {...el, filter: action.filter} : el)
        case "CHANGE-TODOLIST-TITLE":
            return state.map(el => el.id === action.id ? {...el, title: action.title} : el)
        default:
            return state
    }
}

export const RemoveTodoListAC = (id:string) : RemoveTodoListAT=>{
    return {
        type: "REMOVE-TODO-LIST",
        id: id
    }
};
export const AddTodoListAC = (newTitle:string) : AddTodoListAT=>{
    return {
        type: "ADD-TODOLIST",
        newTitle,
        todoListId: v1()
    }
};
export const ChangeTodoListAC = (id:string, filter:FilterValuesType) : ChangeTodoListAT=>{
    return {
        type: "CHANGE-TODO-FILTER",
        filter,
        id
    }
};
export const ChangeTodoListTitleAC = (id:string, title:string) : ChangeTodoListTitleAT=>{
    return {
        type: "CHANGE-TODOLIST-TITLE",
        title,
        id
    }
};