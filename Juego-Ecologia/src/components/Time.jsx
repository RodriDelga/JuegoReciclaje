import { useState, useEffect, useRef } from "react"
import { Organico } from './Trash/Organico'
import { Inorganico } from './Trash/Inorganico'
import { Toxic } from "./Trash/Toxic"
import PropTypes from 'prop-types'

export const Time = ({ board, setBoard }) => {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)
    const Tipo = Array(<Organico />, <Inorganico />, <Toxic />)

    const timer = useRef(null)

    useEffect(() => {
        if(running) {
          timer.current = setInterval(() => {
            setTime(prev => prev + 1)

            const min = 0;
            const max = 139;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            
            const minimo = 0;
            const maximo = 2;
            const Basura = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            

            if(board[randomNumber]) return 
            console.log(Tipo[Basura])
            const newBoard = [...board]
            newBoard[randomNumber] = Tipo[Basura]
            setBoard(newBoard)
          }, 1000)
        } else {
            clearInterval(timer.current)
        }
        return () => clearInterval(timer.current)
    }, [running, board, setBoard, Tipo])

    return (
        <div className="Time">
            <h4>Tiempo: {time}</h4>
            <button onClick={() => setTime(0)}>Restart</button>
            <button onClick={() => {
              if (running) clearInterval(timer.current)
                setRunning(!running) 
            }}>{running ? 'Stop' : 'Start'}</button>
        </div>
    )
}

Time.propTypes = {
    board: PropTypes.array.isRequired, 
    setBoard: PropTypes.func.isRequired, 
};