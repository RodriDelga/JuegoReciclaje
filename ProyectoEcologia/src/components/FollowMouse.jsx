import { useEffect, useState } from "react"

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
      <div className="Botes-Container">
        <div className="Objetos">
          <div className="Object">
            Hola
          </div>
        </div>
        <div className="Botes-Basura">
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
          <div className="Basura">
              <button className="Bote" onClick={() => setEnabled(!enabled)}>
                  {enabled ? 'Desactivar' : 'Activar'} seguir puntero
              </button>
          </div>
        </div>
      </div>
    </>
    
  )
}