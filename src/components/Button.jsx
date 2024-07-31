import React, { useState } from 'react'
import './Button.css'
import { useToggle } from '../hooks/useToggle'

const Button = () => {
    const { state, displyValue } = useToggle()
    return (
        <div className='container'>
            {
                state &&
                <div className="content">
                    <h1>Welcome....</h1>
                </div>
            }
            <button onClick={displyValue}>Toggle</button>
        </div>
    )
}

export default Button