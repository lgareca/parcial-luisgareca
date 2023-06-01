
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  
  const [datos , setDatos] = useState ({
    apellido: '',
    nombre: '',
    musica: ''
  })
  const [mostrar,setMostrar] = useState(false)
  const [error,setError] = useState(false)
  const handleSubmit = (event) =>{
    event.preventDefault()
    if(datos.apellido.trim().length >= 3 && datos.nombre.length >= 6){
      setMostrar(true)
      setError(false)
    }
    else{setError(true)} 
  }


  return (
    <>
      <Form setDatos={setDatos} datos={datos} mostrar={mostrar} handleSubmit={handleSubmit}/>
        {mostrar && <Card datos={datos}/>}
        {error && <h3>informacion incorrecta por favor chequea</h3> }      
    </>
  )
}

export default App
