import React from 'react'

//rafce es el snippet que te genera la estructura

const ListaPeliculas = ({peliculas}) => {
    return (
        <ul>
        {peliculas.map(pelicula=>{
            return <li key={pelicula.id}>
                    {pelicula.title} - {pelicula.year}
                    </li>
            })}
        </ul>
    )
}

export default ListaPeliculas;