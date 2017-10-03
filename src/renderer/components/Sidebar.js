import React, { Component, PropTypes } from 'react'
import styles from './sidebar.scss'

const Sidebar = props => {
    return (
        <div className={ styles.Sidebar }>
            { props.children }
        </div>
    )
}

export default Sidebar