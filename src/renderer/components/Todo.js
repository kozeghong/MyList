import React, { Component, PropTypes } from 'react'
import feather from 'feather-icons'
import styles from './todo.scss'

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={ this.props.onClick }
                className={ this.props.completed ? styles.completed : styles.normal }
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dangerouslySetInnerHTML={{__html: this.iconCheck()}}
                />
                <span>{ this.props.text }</span>
            </li>
        )
    }
    iconCheck() {
        return this.props.completed ? feather.icons['check-square'] : feather.icons['square']
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    table: PropTypes.number.isRequired
}