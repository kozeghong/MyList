import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './todoEdit.scss'
import SvgIcon from './SvgIcon'

export default class TodoEdit extends Component {
    render () {
        const { text } = this.props
        return (
            <div className={ styles.TodoEdit }>
                <div>
                    <SvgIcon icon='check-square' />
                    <input
                        type='text' ref='text'
                        defaultValue={ text }
                    />
                </div>
                <div>
                    <input type="datetime-local" />
                    <input type="datetime-local" />
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <span>CREATED AT</span>
                    <SvgIcon icon='trash-2' />
                </div>
            </div>
        )
    }
}