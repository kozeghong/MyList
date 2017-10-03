import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={ this.props.onClick }
                className={ this.props.styleLi }
            >
                { this.props.completed ? '' : ' ' }
                { this.props.text }
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    table: PropTypes.number.isRequired,
    styleLi: PropTypes.string.isRequired
}