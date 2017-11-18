import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import styles from './todoList.scss'

export default class TodoList extends Component {
    render() {
        return (
            <div className={ styles.TodoList }>
                <ul>
                    {this.props.todos.filter(todo => !todo.completed).map((todo, index) =>
                        <Todo
                            {...todo}
                            key={index}
                            onClick={() => this.props.onTodoClick(todo.id)}
                        />
                    )}
                </ul>
                <h2>COMPLETED</h2>
                <ul>
                    {this.props.todos.filter(todo => todo.completed).map((todo, index) =>
                        <Todo
                            {...todo}
                            key={index}
                            onClick={() => this.props.onTodoClick(todo.id)}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

TodoList.PropTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        table: PropTypes.number.isRequired
    }).isRequired).isRequired
}