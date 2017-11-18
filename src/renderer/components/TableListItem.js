import React, { Component } from 'react'
import PropTypes from 'prop-types'
import feather from 'feather-icons'
import styles from './tableListItem.scss'

export default class TableListItem extends Component {
    constructor() {
        super()
        this.state = {
            editing: false
        }
    }
    render() {
        return (
            <li 
                onClick={ this.props.onClick }
                className={ this.props.id === this.props.tableFilter ? styles.active : styles.normal }
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dangerouslySetInnerHTML={{__html: feather.icons['list']}}
                />
                {
                    !this.state.editing ? 
                    <span onDoubleClick={ e => this.toggleEditing(e) }>{ this.props.name }</span> :
                    <input
                        onBlur={ e => this.handleTableListItemEdit(e) }
                        onKeyUp={ e => this.onInputEnter(e) }
                        type='text' ref='editInput'
                        defaultValue={ this.props.name }
                    />
                }
            </li>
        )
    }
    toggleEditing(e) {
        this.setState({ ...this.state, editing: !this.state.editing })
    }
    onInputEnter(e) {
        e.keyCode === 13 && this.handleTableListItemEdit(e)
    }
    handleTableListItemEdit(e) {
        const node = this.refs.editInput
        const text = node.value.trim()
        if (text) this.props.onEdit(text)
        this.toggleEditing(e)
    }
    componentDidUpdate() {
        if (this.state.editing) this.refs.editInput.focus()
    }
}

TableListItem.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tableFilter: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}