import React, { Component } from 'react'
import PropTypes from 'prop-types';
import feather from 'feather-icons'
import styles from './tableListItem.scss'

export default class TableListItem extends Component {
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
                <span>{ this.props.name }</span>
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