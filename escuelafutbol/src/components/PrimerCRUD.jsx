import React, { useState } from 'react'
import uniqid from 'uniqid'

const PrimerCRUD = () => {
    
const [nombre, setNombre] = useState("")
const [listaNombres, setListaNombres] = useState([])
const [modoEdicion, setModoEdicion] = useState(false)
const [id, setId] = useState('')
const [error, setError] = useState(null)

const addNombre = (e) =>{
    e.preventDefault()//Para que no se recargue la página

    if(!nombre.trim()){
        setError('El campo Nombre está Vacío')
        return
    }

    //Nuevo objeto que guarda el Id y el nombre
    const nuevonombre = {
        id: uniqid(), //Genera un Id único
        tituloNombre: nombre
    }
    setListaNombres([...listaNombres, nuevonombre])
    setNombre('')//Limpia el textbox del nombre
    setError(null)
}

const deleteNombre = (id) => {
    const nuevaArray = listaNombres.filter(item => item.id !== id)
    setListaNombres(nuevaArray)
}

const editar = (item) => {
    setModoEdicion(true)
    setNombre(item.tituloNombre)
    setId(item.id)
}

const editarNombre = (e) => {
    e.preventDefault()

    const nuevoArray = listaNombres
    .map(item => item.id === id ? { id: id, tituloNombre: nombre } : item)

    setListaNombres(nuevoArray)
    setModoEdicion(false)
    setNombre(' ')
}

    return (
        <div className="container">
            <h2>Aplicación CRUD Básica</h2>            
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h2>Listado de Nombres</h2>
                        <ul className="list-group">
                            {
                                 listaNombres.map(item =>
                                    <li key="item.id" className="list-group-item">
                                        {item.tituloNombre}
                                        <button className="btn btn-danger float-end"
                                        onClick={() => { deleteNombre(item.id) }}>Borrar</button>

                                        <button className="btn btn-info float-end"
                                        onClick={() => { editar(item) }}>Editar</button>
                                    </li>
                                    )           
                            }
                        </ul>
                    </div>

                    <div className="col">
                            <h2>Formulario para añadir nombres</h2>
                                <form onSubmit={modoEdicion ? editarNombre : addNombre} className ="form-group">
                                    <input onChange={(e) => { setNombre(e.target.value) }}
                                        className="form-control mb-3" type="text" 
                                        placeholder="Digite el nombre" value={nombre}/>

                                    <input className="btn btn-info btn-block mb-3"
                                        type="submit"
                                        value={ modoEdicion ? 'Editar nombre' : 'Registrar nombre' }/>{/*Si el modo edición es true, el botón Muestra Editar Nombre, sino, Registrar Nombre */}
                                </form>

                                {//Comprobamos si setError es diferente a null
                                    error != null ? (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    ): (//Si es null, sólo se dejan las etiquetas del div
                                        <div></div>
                                    )
                                }

                            
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PrimerCRUD
