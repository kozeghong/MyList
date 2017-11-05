import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './todoAdd.scss'

export default class TodoAdd extends Component {
    render() {
        return (
            <div className={ styles.TodoAdd }>
                <input 
                    type='text' ref='input'
                    onKeyUp={ e => this.onInputEnter(e) }
                    placeholder='Add New Item'
                />
                <button onClick={ e => this.handleClick(e) }>
                    +
                </button>
            </div>
        )
    }
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        if (text) this.props.onAddClick(text)
        node.value = ''
    }
    onInputEnter(e) {
        e.keyCode === 13 && this.handleClick(e)
    }
}

TodoAdd.propTypes = {
    onAddClick: PropTypes.func.isRequired
}