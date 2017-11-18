import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './tableListAdd.scss'

export default class TableListAdd extends Component {
    render() {
        return (
            <div className= { styles.TableListAdd }>
                <input type='text' ref='input' placeholder='Add New List' onKeyUp={ e => this.onInputEnter(e) } />
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
        if (text) this.props.onAddClick(text)
        node.value = ''
    }
}

TableListAdd.PropTypes = {
    onAddClick: PropTypes.func.isRequired
}