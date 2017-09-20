import React, { Component, PropTypes } from 'react'
import TableListItem from './TableListItem'
import TableListAdd from './TableListAdd'

export default class TableList extends Component {
    render() {
        return (
            <div>
                <ul>
                    { this.props.tables.map((table, index) => {
                        <TableListItem
                            {...table}
                            key={index}
                            onClick={() => this.props.onTableClick(index)}
                        />
                    }) }
                </ul>
            </div>
        )
    }
}

TableList.PropTypes = {
    tables: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTableClick: PropTypes.func.isRequired
}