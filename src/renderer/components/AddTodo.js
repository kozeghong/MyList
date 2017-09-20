import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' onKeyUp={ e => this.onInputEnter(e) } />
                <button onClick={ e => this.handleClick(e) }>
                    Add
                </button>
            </div>
        )
    }
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    };
    onInputEnter(e) {
        e.keyCode === 13 && this.handleClick(e)
    };
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}