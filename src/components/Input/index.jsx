import React, { useState } from 'react'

const Input = ({handleChange, value, label, placeholder}) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor=""></label>
            <input type="text" onChange={handleChange} placeholder={placeholder}/>
            <span>Typing value: {value}</span>
        </div>
    )
}

export default Input
