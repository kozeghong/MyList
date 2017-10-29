import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from  'react-redux'
import { addTodo, completeTodo, addTable, editTable, setTableFilter } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import TableList from '../components/TableList'
import TableListAdd from '../components/TableListAdd'
import Sidebar from '../components/Sidebar'
import MainArea from '../components/MainArea'
import '../styles/app.scss'

class App extends Component {
    render() {
        const { dispatch, visibleTodos, tables, tableFilter } = this.props
        return (
            <div className='container'>
                <Sidebar>
                    <TableList
                        tables={ tables }
                        tableFilter={ tableFilter }
                        onTableClick={ index => dispatch(setTableFilter(index)) }
                        onTableEdit={ (id, text) => dispatch(editTable(id, text)) }
                    />
                    <TableListAdd
                        onAddClick={ text => dispatch(addTable(text)) }
                    />
                </Sidebar>
                <MainArea>
                    <AddTodo
                        onAddClick={ text => dispatch(addTodo(text, tableFilter)) }
                    />
                    <TodoList
                        todos={ visibleTodos }
                        onTodoClick={ index => dispatch(completeTodo(index)) }
                    />
                </MainArea>
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        table: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    tables: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    tableFilter: PropTypes.number.isRequired
}

function selectTodos(todos, filter) {
    return todos.filter(todo => todo.table === filter)
    // switch(filter) {
    //     case VisibilityFilters.SHOW_ALL:
    //         return todos
    //     case VisibilityFilters.SHOW_COMPLETED:
    //         return todos.filter(todo => todo.completed)
    //     case VisibilityFilters.SHOW_ACTIVE:
    //         return todos.filter(todo => !todo.completed)
    // }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.tableFilter),
        tables: state.tables,
        tableFilter: state.tableFilter
    }
}

export default connect(select)(App)