import React from 'react'

const BtnQuote = ({ objStyle, handleClick }) => {
    return (
        <button style={objStyle} className='card__btn' onClick={handleClick}>&gt;</button>
    )
}

export default BtnQuote