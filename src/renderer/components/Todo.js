import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SvgIcon from './SvgIcon'
import styles from './todo.scss'

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={ this.props.onClick }
                className={ this.props.completed ? styles.completed : styles.normal }
            >
                <SvgIcon icon={ this.iconCheck() } />
                <span>{ this.props.text }</span>
            </li>
        )
    }
    iconCheck() {
        return this.props.completed ? 'check-square' : 'square'
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    table: PropTypes.number.isRequired
}