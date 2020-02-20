import React from 'react'

const Footer = (props) => {
    return (
        <div className='text-light bg-dark p-3 text-center'>
            <span> Created by {props.name}</span>
        </div>
    )
}

export default Footer