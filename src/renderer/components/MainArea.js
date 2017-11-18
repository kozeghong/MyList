import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './mainArea.scss'

const MainArea = props => {
    return (
        <div className={ styles.MainArea }>
            { props.children }
        </div>
    )
}

export default MainArea