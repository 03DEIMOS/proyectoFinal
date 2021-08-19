import React, { useState } from 'react'

const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(25)
    const subir = () => {
        setTemperatura(temperatura + 1)
    }

    const bajar = () => {
        setTemperatura(temperatura - 1)
    }

    return (
        <div className='container-fluid'>
            <h2>La temperatura es: {temperatura} </h2>
            <label>
                {
                    temperatura > 24 ? 'Hace Calor' : 'Hace frío'
                }
            </label>

            <button className = "btn btn-success btn-block" onClick={bajar}>Bajar Temperatura</button>
            <button className = "btn btn-danger btn-block" onClick={subir}>Subir Temperatura</button>
        </div>
    )
}

export default Temperatura
