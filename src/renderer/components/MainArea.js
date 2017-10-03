import React, { Component, PropTypes } from 'react'
import styles from './mainArea.scss'

const MainArea = props => {
    return (
        <div className={ styles.MainArea }>
            { props.children }
        </div>
    )
}

export default MainArea