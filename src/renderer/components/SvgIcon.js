import React, { Component } from 'react'
import PropTypes from 'prop-types'
import feather from 'feather-icons'

const SvgIcon = props => {
    const { icon } = props
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            dangerouslySetInnerHTML={{__html: feather.icons[icon]}}
        />
    )
}

export default SvgIcon