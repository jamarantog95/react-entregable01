import React from 'react'



const TextQuote = ({ quoteRandom }) => {
    return (
        <>
            <p className='card_quote'>{quoteRandom.quote}</p>
            <h1 className='card_author'>{quoteRandom.author}</h1>
        </>
    )
}

export default TextQuote