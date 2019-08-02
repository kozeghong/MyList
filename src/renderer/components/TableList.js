import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableListItem from './TableListItem'
import TableListAdd from './TableListAdd'
import styles from './tableList.scss'

export default class TableList extends Component {
    render() {
        return (
            <div className={ styles.TableList }>
                <ul>
                    { this.props.tables.map((table, index) =>
                        <TableListItem
                            { ...table }
                            key={ index }
                            tableFilter={ this.props.tableFilter }
                            onClick={ () => this.props.onTableClick(table.id) }
                            onEdit={ (text) => this.props.onTableEdit(table.id, text) }
                        />
                    ) }
                </ul>
            </div>
        )
    }
}

TableList.propTypes = {
    tables: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTableClick: PropTypes.func.isRequired,
    onTableEdit: PropTypes.func.isRequired,
    tableFilter: PropTypes.number.isRequired
}