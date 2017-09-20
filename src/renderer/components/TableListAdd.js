import React, { Component, PropTypes } from 'react'

export default class TableListAdd extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' onKeyUp={ e => this.onInputEnter(e) } />
                <button onClick={ e => this.handleClick(e) }> + </button>
            </div>
        )
    }
    onInputEnter(e) {
        e.keyCode === 13 && this.handleClick(e)
    }
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}

TableListAdd.PropTypes = {
    onAddClick: PropTypes.func.isRequired
}