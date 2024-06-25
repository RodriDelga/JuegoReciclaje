import { useState, useEffect, useRef } from "react"
import { Organico } from './Organico'
import { format } from "mysql"

export const Time = ({ board, setBoard }) => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    const timer = useRef(null)

    useEffect(() => {
        if(running) {
          timer.current = setInterval(() => {
            setTime(prev => prev + 1)

            const min = 1;
            const max = 140;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(randomNumber)

            const newBoard = [...board]
            newBoard[randomNumber] = <Organico />
            setBoard(newBoard)
          }, 1000)
        } else {
            clearInterval(timer.current)
        }
        return () => clearInterval(timer.current)
    }, [running, board, setBoard])

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