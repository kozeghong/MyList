export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_TABLE_FILTER = 'SET_TABLE_FILTER'
export const ADD_TABLE = 'ADD_TABLE'
export const EDIT_TABLE = 'EDIT_TABLE'

export function addTodo(text, table) {
    return { type: ADD_TODO, text, table }
}

export function completeTodo(id) {
    return { type: COMPLETE_TODO, id }
}

export function addTable(text) {
    return { type: ADD_TABLE, text }
}

export function editTable(id, text) {
    return { type: EDIT_TABLE, id, text }
}

export function setTableFilter(id) {
    return { type: SET_TABLE_FILTER, id }
}