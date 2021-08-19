import React, {Fragment, useState} from 'react'

const Listas = () => {
    const[personas] = useState(['Juan', 'Ana', 'José', 'Pedro'])
    return (
        <Fragment>
            <ul>
                {
                    personas.map((item, index) =>
                        <li key={index}>
                            {index} - {item}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listas
