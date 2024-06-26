import { useEffect, useState } from "react"
import { Square } from "./Square.jsx"
import { BoteOrganico } from "./TrashCan/BoteOrganico.jsx"
import { Time } from "./Time.jsx"
import { BoteInorganico } from "./TrashCan/BoteInorganico.jsx"
import { BoteToxico } from "./TrashCan/BoteToxico.jsx"

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false) // Estos son más useStates, este se utiliza para saber cuando cambiar la posición del <div />
  const [position, setPosition] = useState({ x: 0, y: 0 }) // Este cambia la posición del <div />

    /**
     * Este array se utilizara como una sección que guarde muchos cuadros donde en el children de esos cuadros
     * se almacenaran los compenentes de basura, por ahora todos deben estar en null para que no muestren nada
     */
    const [board, setBoard] = useState(() => {
      return Array(140).fill( null)
    })

    // Leer primero los comentarios de abajo de esta función
    const updateBoard = (index) => {// Sabiendo de donde salen estos valores veamos como funciona
      if (board[index]===null) return// Si el valor de un Square o el children es igual a null debe retornar la función para evitar que se ejecute
      const newBoard = [...board]// Esto es un spread, se usa para duplicar un arreglo y cambiar valores de un arreglo desde otra variable nueva
      newBoard[index]= null// Como queremos cambiar el valor de children, entonces debe volver a ser null
      setBoard(newBoard)// ya que cambiamos el arreglo se lo mandamos a setBoard
      setEnabled(true)// Y activamos que comience a seguir el cursor
    }

    useEffect(() => {// Este es un useEffect que se se renderiza siempre que su valor que esta abajo no cambie
      const handleMove = (event) => {// Esta función llama al evento que se genera abajo
        const { clientX, clientY } = event // El evento le dara el valor a esas dos constantes
        setPosition({ x: clientX, y: clientY })// Se mandan esas dos constantes para cambiar el valor de position
      }
      
      if(enabled){
        window.addEventListener('pointermove', handleMove)// Este evento solo se ejecuta si el enabled esta en true
      }

      return () => {
        window.removeEventListener('pointermove', handleMove)// Siempre se debe retornar algo para limpiar el useEffect y evitar que se ejecuten procesos innecesarios
      }
    }, [enabled])// Este es el valor que si cambia deja se renderizarse en useEffect

    useEffect(() => {// Este useEffect es para cambiar el tipo de cursor y funciona igual que el de arriba
      document.body.classList.toggle('no-cursor', enabled)

      return () => {
        document.body.classList.remove('no-cursor')
      }
    }, [enabled])

  return (
    <>
      {/* Este es el div que seguira el cursor mientras cambie de posición por el useState */}
      <div style={{
        position: 'absolute',
        backgroundColor: '#35398c',
        border: '1px solid #fff',
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`// Estas son las posiciones que debe cambiar
      }} 
      />
      <div className="Pantalla">
        <div className="Botes-Container">
          <section className="Objetos">
          {/**
           * Esto es lo que renderizara el arreglo board con el .map y este devolvera dos
           * valores, que son el hijo del componente Square y el indice del Square o donde
           * se encuentra en el arreglo
           */}
          {
            board.map((square, index) => {
              return(
                <Square key={index} index={index} updateBoard={updateBoard}>{/* ---> Ir al archivo Square.jsx */}
                  {square}
                </Square>
              )
            })
          }
          </section>
          <section className="Botes-Basura">
            <BoteOrganico setEnabled={setEnabled}/>{/* ---> Ir al archivo BoteOrganico */}
            <BoteInorganico setEnabled={setEnabled}/>
            <BoteToxico setEnabled={setEnabled}/>
          </section>
        </div>
        {/* Este footer lleva información sobre el juego, sin embargo lo unico que funciona es el tiempo */}
        <footer className="Datos">
          <div className="Points">
            <h3 className="Point-Data">Separa la Basura</h3>
            <h4 className="Point-Data">Basura recogida: </h4>
            <h4 className="Point-Data">Basura quemada: </h4>
            <h4 className="Point-Data">Puntos: </h4>
          </div>
          <Time board={board} setBoard={setBoard} />{/* ---> Ir al archivo Time.jsx */}
          <div className="Camión">
            <button>Subir la basura al camión</button>
          </div>
        </footer>
      </div>
    </>
    
  )
}