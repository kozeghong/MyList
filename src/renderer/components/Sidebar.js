import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './sidebar.scss'

const Sidebar = props => {
    return (
        <div className={ styles.Sidebar }>
            { props.children }
        </div>
    )
}

export default Sidebar