import { useEffect, useState } from "react"
import { Square } from "./Square.jsx"
import { BoteOrganico } from "./BoteOrganico.jsx"
import './FollowMouse.css'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 200, y: 400 })
  const [mostrar, setMostrar] = useState(false)

    const [board, setBoard] = useState(() => {
      return Array(140).fill( null)
    })
  
    useEffect(() => {
      console.log('efecto', { enabled })
        
      const handleMove = (event) => {
        const { clientX, clientY } = event
        setPosition({ x: clientX, y: clientY })
      }
      
      if(enabled){
        window.addEventListener('pointermove', handleMove)
      }

      return () => {
        console.log('cleanup')
        window.removeEventListener('pointermove', handleMove)
      }
    }, [enabled])

    useEffect(() => {
      document.body.classList.toggle('no-cursor', enabled)
      

      return () => {
        document.body.classList.remove('no-cursor')
      }
    }, [enabled])

    useEffect(() => {
      const newPosition = () =>{
        setPosition({ x: 0 , y: 0})
      }

      if(mostrar){
        window.addEventListener('pointermove',newPosition)
      }

      return () => {
        console.log('cleanup')
        window.removeEventListener('pointermove', newPosition)
      }
    }, [mostrar])

    /*
    const Timer = () => {
      const [second, setSecond] = useState(0)
      const [minute, setMinute] = useState(0)
      
      var timer;

      useEffect(() => {
        timer = setInterval(() => {

          setSecond(second+1)

          if(second===59){
            setMinute(minute+1)
            setSecond(0)
            }

          }, 1000)

          return (
            clearInterval(timer),
            setSecond(0),
            setMinute(0)
          )
        })
    }
    */

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#35398c',
        border: '1px solid #fff',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} 
      />
      <div className="Pantalla">
        <div className="Botes-Container">
          <section className="Objetos">
          {
            board.map((square, index) => {
              return(
                <Square key={index} index={index} enabled={enabled} setEnabled={setEnabled}/>
              )
            })
          }
          </section>
          <section className="Botes-Basura">
            <div className="Basura">
                <BoteOrganico enabled={enabled} setEnabled={setEnabled}/>
            </div>
            <div className="Basura">
                <button className="Bote" onClick={() => setMostrar(false) }>
                    {enabled ? 'Desactivar' : 'Activar'} seguir puntero
                </button>
            </div>
            <div className="Basura">
                <button className="Bote" onClick={() => setEnabled(!enabled)}>
                    {enabled ? 'Desactivar' : 'Activar'} seguir puntero
                </button>
            </div>
          </section>
        </div>
        <footer className="Datos">
          <div className="Points">
            <h3>Separa la Basura</h3>
            <h4>Basura recogida: </h4>
            <h4>Basura quemada: </h4>
            <h4>Puntos: </h4>
          </div>
          <div className="Time">
            <h4>Tiempo: </h4>
          </div>
          <div className="Camión">
            <button>Subir la basura al camión</button>
          </div>
        </footer>
      </div>
    </>
    
  )
}