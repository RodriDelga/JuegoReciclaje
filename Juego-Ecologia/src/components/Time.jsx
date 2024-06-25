import { useState, useEffect, useRef } from "react"
import { Organico } from './Organico'
import { Inorganico } from './Inorganico'
import { format } from "mysql"
import { Toxic } from "./Toxic"
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
            <h4>Tiempo: {format(time)}</h4>
            <button onClick={() => setTime(0)}>Restart</button>
            <button onClick={() => {
              if (running) clearInterval(timer.current)
                setRunning(!running)
            }}>{running ? 'Stop' : 'Start'}</button>
        </div>
    )
}

Time.propTypes = {
    board: PropTypes.array.isRequired, // Valida que board sea un array y sea requerido
    setBoard: PropTypes.func.isRequired, // Valida que setBoard sea una función y sea requerida
};