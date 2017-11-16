import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoEdit extends Component {
    render () {
        const { text } = this.props
        return (
            <div>
                <input
                    type='text' ref='text'
                    defaultValue={ text }
                />
                
            </div>
        )
    }
}