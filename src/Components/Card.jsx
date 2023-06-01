import React from 'react'

const Card = ({datos}) => {
  return (
    <div>
      <h3>Hola, tu apellido {datos.apellido}</h3>
      <h3>Tu nombre {datos.nombre}</h3>
      <h3>Tu musica elegida {datos.musica}</h3>
    </div>
  )
}

export default Card