import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'




function App() {
  // creamos los estados
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState('Paco');
  //creamos las funciones de control
  function cambiarNombre(){
    console.log('nombre', nombre);
    //nombre = 'Pepe'
    setNombre('Eva')
    console.log('nombre', nombre);
  }
  return (
    <>
      
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={cambiarNombre}>Hola señor {nombre} </button>
      </div>
    </>
  )
}

export default App
