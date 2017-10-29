import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_TABLE_FILTER, ADD_TABLE, EDIT_TABLE } from './actions'

const DEFAULT_TABLE = [{
    id: 0,
    name: 'MyList'
}]

function tableFilter(state = 0, action) {
    switch (action.type) {
        case SET_TABLE_FILTER:
            return action.id
        default:
            return state
    }
}

function tables(state = DEFAULT_TABLE, action) {
    switch (action.type) {
        case ADD_TABLE:
            return [
                ...state,
                {
                    id: state[state.length-1] ? state[state.length-1].id+1 : 0,
                    name: action.text
                }
            ]
        case EDIT_TABLE:
            return state.map(v => v.id === action.id ? { ...v, name: action.text } : v)
        default:
            return state
    }
}

function todos(state = [{id: 0, text: 'first todo', table: 0, completed: false}], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state[state.length-1] ? state[state.length-1].id+1 : 0,
                    text: action.text,
                    table: action.table,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return state.map(v => v.id === action.id ? { ...v, completed: !v.completed } : v)
        default:
            return state
    }
}

const todoApp = combineReducers({
    tableFilter,
    todos,
    tables
})

export default todoApp