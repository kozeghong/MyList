import React, { Component, PropTypes } from 'react'

export default class TableListItem extends Component {
    render() {
        return (
            <li onClick={ this.props.onClick }>
                { this.props.id === this.props.tableFilter ? '>>' : '' }
                { this.props.name }
            </li>
        )
    }
}

TableListItem.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tableFilter: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}