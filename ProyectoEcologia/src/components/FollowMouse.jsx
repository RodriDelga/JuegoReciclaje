import { useEffect, useState } from "react"
import './FollowMouse.css'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 200, y: 400 })
  
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
        backgroundColor: '#cf1515',
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
          <div className="Objetos">
            <div onClick={() => setEnabled(true)} className="Object">
              Hola
            </div>
          </div>
          <div className="Botes-Basura">
            <div className="Basura">
                <button className="Bote" onClick={() => setEnabled(false)}>
                    {enabled ? 'Desactivar' : 'Activar'} seguir puntero
                </button>
            </div>
            <div className="Basura">
                <button className="Bote" onClick={() => setEnabled(!enabled)}>
                    {enabled ? 'Desactivar' : 'Activar'} seguir puntero
                </button>
            </div>
            <div className="Basura">
                <button className="Bote" onClick={() => setEnabled(!enabled)}>
                    {enabled ? 'Desactivar' : 'Activar'} seguir puntero
                </button>
            </div>
          </div>
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