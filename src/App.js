//como se crea un componente

import React from 'react'

const App=(props)=>{
//puedo usar ({name, age})

// crear codigo javascript
//funciones
//variables

//const nombre='Federico'

    return (
        <div>
            <h1>Soy {props.name}, el componente App</h1>
            <h2>Tengo {props.age} años</h2>
            <h2>Soy {2+1}</h2>
            <hr></hr>
            <p>Este es mi primer componente de React</p>
        </div>
    );
};


//cuando hay una sola, si no se pone el export precio al const de cada funcion ej: 'export
export default App
