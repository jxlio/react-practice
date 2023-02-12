import React, { useEffect, useState } from 'react'
import descarga from "../admin/descarga.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const vehiculosLista = [
  {
    nombre: "Corola",
    marca: "Toyota",
    modelo: 1999

},

  {
    nombre: "Jul",
    marca: "Smite",
    modelo: 1299

  },

  {
    nombre: "Sweet",
    marca: "Trynda",
    modelo: 1999

  },

  {
    nombre: "Cokl",
    marca: "Toyota",
    modelo: 1999

  }
]




const Vehiculos = () => {

  const [crearTabla, setCrearTabla] = useState(true) 
  const [textoBoton, setTextoBoton] = useState("Agregar nuevo vehiculo")
  const [vehiculos, setVehiculos] = useState([])
  const [colorBoton, setColorBoton] = useState('blue')


 
  useEffect(() => {
    setVehiculos(vehiculosLista)

  }, [])




  useEffect(() => {
    if(crearTabla){
      setTextoBoton("Agregar nuevo vehiculo")
      setColorBoton('blue')
    }else{
      setTextoBoton("Ver tabla")
      setColorBoton('green')
    }
  }, [crearTabla])

  return(

    

  <div>
    <h2>Pagina de administracion de vehiculos</h2>
    <button onClick={() => setCrearTabla(!crearTabla) } 
    className = 
    {`mx-2 bg-${colorBoton} p-2 text-black shadow-md rounded-lg`}> 
    {textoBoton} </button>


    {
      crearTabla ? <TablaVehiculos listaVehiculos={vehiculos}/>: <FormularioCreacionVehiculos/> 
    }
      <ToastContainer position='bottom-center' />
      
  </div>
  )
}


const TablaVehiculos = ({listaVehiculos}) => {
  useEffect(() => {
    console.log("No se", listaVehiculos)
  }, [listaVehiculos])
  return(
    <div>
      <h2>Tabla que muestra vehiculos registrados</h2>

      <table>
        <thead>
          <tr>
            <th>Nombre vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
          </tr>

        </thead>
        <tbody>

          {
            listaVehiculos.map((vehiculos) => {
              return(
          <tr>
            <td>{vehiculos.nombre}</td>
            <td>{vehiculos.marca}</td>
            <td>{vehiculos.modelo}</td>
          </tr>
              )
            })
          }
  
        </tbody>
      </table >
      
    </div>
  )
}

const FormularioCreacionVehiculos = ()=>{

  const enviarDatos = () => {
    console.log("Nombre:",nombre, "Marca:",marca, "Modelo:",modelo)
    toast.success("Datos enviados")
  }


  const [nombre, setNombre] = useState()
  const[modelo, setModelo] = useState()
  const[marca, setMarca] = useState()

  
  return(
    <div className='flex flex-col'>

      
      <label className='flex flex-col' htmlFor="nombre">
        Ingrese el nombre del vehiculo
      <input value={nombre} onChange={(e) =>{
        setNombre(e.target.value)
      }} className='bg-gray-50 border border-gray-500 rounded-r-lg m-2' type="text" name='nombre'/>
      </label>

      <label className='flex flex-col' htmlFor="marca">
        Ingrese la marca del vehiculo
        <select value={marca} onChange={(e) =>{
        setMarca(e.target.value)}}

         name="marca" className='border border-gray-500 rounded-r-lg m-2' type="text" >
          <option >Toyota</option>
          <option >Renault</option>
          <option >Prado</option>
          <option>Chevrolet</option>
        </select>
      </label>

      <label className='flex flex-col' htmlFor="modelo">
        Ingrese el modelo del vehiculo
      <input value={modelo} onChange={(e) =>{
        setModelo(e.target.value)}}
 className='bg-gray-50 border border-gray-500 rounded-r-lg m-2' type="text" name='modelo'/>
      </label>

      
      
     
      <button onClick={() => {
        enviarDatos()
      }} className='col-span-2 mx-2 bg-indigo-500 p-2 text-white shadow-md rounded-lg hover:bg-indigo-900 ' >Guardar vehiculo</button>
    </div>
  )
}

export default Vehiculos