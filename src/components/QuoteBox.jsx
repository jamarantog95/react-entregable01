import React from 'react'
import BtnQuote from './BtnQuote'
import IconQuote from './IconQuote'
import TextQuote from './TextQuote'

const QuoteBox = ({ quoteRandom, handleClick, colorRandom }) => {

    const objStyle = {
        color: colorRandom
    }

    const objStyleBtn = {
        backgroundColor: colorRandom
    }

    return (
        <article className='card' style={objStyle}>
            {/* <i className="card__icon fa-solid fa-quote-left"></i> */}
            <IconQuote />
            {/* <p className='card_quote'>{quoteRandom.quote}</p>
            <h1 className='card_author'>{quoteRandom.author}</h1> */}
            <TextQuote
                quoteRandom={quoteRandom}
            />
            <BtnQuote
                objStyle={objStyleBtn}
                handleClick={handleClick}
            />
        </article>
    )
}

export default QuoteBox