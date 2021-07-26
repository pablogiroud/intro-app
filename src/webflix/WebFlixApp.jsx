import React from 'react'
import ListaPeliculas from './ListaPeliculas'
import movies from './webflix'

export const WebFlixApp = () => {
    return (
        <div className='container'>
            <div className="col">
                <h1>Binvenido a WebFlix</h1>
                <hr />
                <h3>Peliculas</h3>
                {/* lista de peliculas 
                <ul>
                    {movies.map(pelicula=>{
                        return <li key={pelicula.id}>{pelicula.title}</li>
                    })};
                </ul>
                */}
                <ListaPeliculas peliculas={movies} />
            </div>
        </div>
    )
}
