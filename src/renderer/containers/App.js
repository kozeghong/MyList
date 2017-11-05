import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from  'react-redux'
import { addTodo, completeTodo, addTable, editTable, setTableFilter } from '../actions'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import TableList from '../components/TableList'
import TableListAdd from '../components/TableListAdd'
import Sidebar from '../components/Sidebar'
import MainArea from '../components/MainArea'
import '../styles/app.scss'

class App extends Component {
    render() {
        const { dispatch, visibleTodos, tables, tableFilter } = this.props
        const { onTableClick, onTableEdit, onTableAddClick, onTodoAddClick, onTodoClick } = this.props
        return (
            <div className='container'>
                <Sidebar>
                    <TableList
                        tables={ tables }
                        tableFilter={ tableFilter }
                        onTableClick={ onTableClick }
                        onTableEdit={ onTableEdit }
                    />
                    <TableListAdd
                        onAddClick={ onTableAddClick }
                    />
                </Sidebar>
                <MainArea>
                    <TodoAdd
                        onAddClick={ onTodoAddClick(tableFilter) }
                    />
                    <TodoList
                        todos={ visibleTodos }
                        onTodoClick={ onTodoClick }
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
}

const mapStateToProps = (state) => {
    return {
        visibleTodos: selectTodos(state.todos, state.tableFilter),
        tables: state.tables,
        tableFilter: state.tableFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTableClick: (index) => dispatch(setTableFilter(index)),
        onTableEdit:  (id, text) => dispatch(editTable(id, text)),
        onTableAddClick: (text) => dispatch(addTable(text)),
        onTodoAddClick: (tableFilter) => (text) => dispatch(addTodo(text, tableFilter)),
        onTodoClick: (index) => dispatch(completeTodo(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)