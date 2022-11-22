import './App.css'
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import QuoteBox from './components/QuoteBox'
import { useState } from 'react'

function App() {

    const getRandomFromArray = arr => {
        // Recorre la longitud del arreglo y su indice aleatorio
        const indexRandom = Math.floor(arr.length * Math.random())
        return arr[indexRandom] // retorna el elemento random
    }
    // console.log(getRandomFromArray(quotes))

    //Declaramos los useState y le asignamos la funcion 
    const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))

    const [colorRandom, setcolorRandom] = useState(getRandomFromArray(colors))

    // Ejecutamos funcion manejador
    const handleClick = () => {
        // Recibe la funcion Set que va modificar el estado
        setQuoteRandom(getRandomFromArray(quotes))
        setcolorRandom(getRandomFromArray(colors))
    }

    const objStyle = {
        backgroundColor: colorRandom
    }


    return (
        <div className="App" style={objStyle}>
            <QuoteBox
                quoteRandom={quoteRandom}
                handleClick={handleClick}
                colorRandom={colorRandom}
            />
        </div>
    )
}

export default App
