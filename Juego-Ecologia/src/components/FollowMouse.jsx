import { useEffect, useState } from "react"
import { Square } from "./Square.jsx"
import { BoteOrganico } from "./TrashCan/BoteOrganico.jsx"
import { Time } from "./Time.jsx"
import { BoteInorganico } from "./TrashCan/BoteInorganico.jsx"
import { BoteToxico } from "./TrashCan/BoteToxico.jsx"

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [selected, setSelected] = useState(false)

    const [board, setBoard] = useState(() => {
      return Array(140).fill( null)
    })

    const updateBoard = (index) => {
      if (board[index]===null || selected) return
      const newBoard = [...board]
      newBoard[index]= null
      setBoard(newBoard)
      setEnabled(true)
    }

    useEffect(() => {
      const handleMove = (event) => {
        const { clientX, clientY } = event 
        setPosition({ x: clientX, y: clientY })
      }
      
      if(enabled){
        window.addEventListener('pointermove', handleMove)
      }

      return () => {
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
        backgroundColor: '#35398c',
        border: '1px solid #fff',
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
                <Square key={index} index={index} updateBoard={updateBoard} setSelected={setSelected}>
                  {square}
                </Square>
              )
            })
          }
          </section>
          <section className="Botes-Basura">
            <BoteOrganico setEnabled={setEnabled} setSelected={setSelected}/>
            <BoteInorganico setEnabled={setEnabled} setSelected={setSelected}/>
            <BoteToxico setEnabled={setEnabled} setSelected={setSelected}/>
          </section>
        </div>
        <footer className="Datos">
          <div className="Points">
            <h3 className="Point-Data">Separa la Basura</h3>
            <h4 className="Point-Data">Basura recogida: </h4>
            <h4 className="Point-Data">Basura quemada: </h4>
            <h4 className="Point-Data">Puntos: </h4>
          </div>
          <Time board={board} setBoard={setBoard} />
          <div className="Camión">
            <button>Subir la basura al camión</button>
          </div>
        </footer>
      </div>
    </>
    
  )
}