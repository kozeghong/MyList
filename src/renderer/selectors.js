import { createSelector } from 'reselect'

const getTodos = (state) => state.todos
const getFilter = (state) => state.tableFilter

export const selectTodos = createSelector(
    [getTodos, getFilter],
    (todos, filter) => todos.filter(todo => todo.table === filter)
)