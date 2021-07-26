import React, {useState} from 'react';

const Asincronismo = () => {

//Promesas
/*
const validacion=false

const promesaValidacion=()=>{

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(validacion){
                resolve({
                    ok: true,
                    mensaje: "Todo salio bien",
                });
            }else{
                reject({
                    ok: false,
                    mensaje: "No llego nada bro :(",
                });
            }
        },2000)

    })
}

promesaValidacion()
.then((respuesta)=>console.log(respuesta))
.catch(error=>console.warn(error))



//Fetch
    fetch("https://superheroapi.com/api.php/10226146164942245/search/superman")
    .then((response)=>response.json())
    //.then((data)=>console.log(data))
    .then(({results})=>console.log(results))
    .catch((error)=>console.log(error));

//Async await

/*const getHeroe= async()=>{
    
    const resp = await fetch("https://superheroapi.com/api.php/10226146164942245/search/superman");
    const data = await resp.json();
    console.log(data)
}
const getHeroe= async()=>{
    
    const resp = await fetch("https://superheroapi.com/api.php/10226146164942245/search/superman");
    const data = await resp.json();
    console.log(data)
}
*/
const [state, setState] = useState([]);

const getHeroe = async () => {
    try {
      const resp = await fetch("https://www.superheroapi.com/api.php/2977672439133477/search/superman");
      const data = await resp.json();
      setState(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  getHeroe();

    return (
        <div>
            <h1>Asincronismo en JavaScript</h1>
            <hr/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map(heroe=>(
                        <tr key={heroe.id}>
                            <td>
                                <img className="imgHeroe" src={heroe.image.url} alt={heroe.name}/>
                            </td>
                            <td>{heroe.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Asincronismo;
