import React from "react";


const Form = ({setDatos,handleSubmit,mostrar,datos}) => {
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Apellido</label>
            <input type = "text"   onChange={(e)=> setDatos({...datos,apellido: e.target.value})}/>
            <label>Nombre</label>
            <input type = "text"  onChange={(e)=> setDatos({...datos,nombre: e.target.value})}/>
            <label>Musica</label>
            <input type = "text"  onChange={(e)=> setDatos({...datos,musica: e.target.value})}/>
            <button>Enviar</button>
        </form>



    </div>
    )
}
 
export default Form