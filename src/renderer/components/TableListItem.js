import React, { Component, PropTypes } from 'react'

export default class TableListItem extends Component {
    render() {
        return (
            <li>
                <a href="">{ this.props.name }</a>
            </li>
        )
    }
}

TableListItem.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}