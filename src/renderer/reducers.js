import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, SET_TABLE_FILTER, VisibilityFilters } from './actions'
const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function tableFilter(state = 0, action) {
    switch (action.type) {
        case SET_TABLE_FILTER:
            return action.index
        default
            return state
    }
}

function tables(state = [], action) {
    switch (action.type) {
        case ADD_TABLE:
            return [
                ...state,
                {
                    id: state[state.length - 1 ].id + 1,
                    name: action.name
                }
            ]
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                {...state[action.index], completed: true},
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    tableFilter,
    visibilityFilter,
    todos
})

export default todoApp