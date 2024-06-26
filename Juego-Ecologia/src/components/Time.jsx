import { useState, useEffect, useRef } from "react"
import { Organico } from './Trash/Organico'
import { Inorganico } from './Trash/Inorganico'
import { Toxic } from "./Trash/Toxic"
import PropTypes from 'prop-types'

export const Time = ({ board, setBoard }) => {
    /**
     * Declarando nuevos estados para usarlos posteriormente
     */
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)
    const Tipo = Array(<Organico />, <Inorganico />, <Toxic />)// Este arreglo es lo que se mandara de valor a los childrens

    const timer = useRef(null)// Declaramos este nuevo hooks llamado useRef, que permite mantener una referencia mutable

    useEffect(() => {
        if(running) {// Si running es verdadero se ejecutara esto
          timer.current = setInterval(() => {//Accedemos al timer y le damos el valor de la función setInterval
            setTime(prev => prev + 1)// que ejecutara primero el cambio de segundos

            const min = 0;
            const max = 139;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            // Despues conseguimos un numero aleatorio para elegir el index de un Square
 
            const minimo = 0;
            const maximo = 2;
            const Basura = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            // Luego obtenemos otro numero aleatorio para escoger el valor que le vamos a mandar al Square

            if(board[randomNumber]) return //Aquí retornamos si el board[randomNumber] es igual
            console.log(Tipo[Basura])
            const newBoard = [...board]// Volvemos hacer un spread para cambiar los valores
            newBoard[randomNumber] = Tipo[Basura]
            setBoard(newBoard)
          }, 1000)
        } else {
            clearInterval(timer.current)// Si running es falso limpiamos el Intervalo de timer
        }
        return () => clearInterval(timer.current)// Si el useEffect ya no se ejecuta retornar esto
    }, [running, board, setBoard, Tipo])

    return (
        <div className="Time">
            <h4>Tiempo: {time}</h4>{/* Mandamos el tiempo */}
            <button onClick={() => setTime(0)}>Restart</button>{/* Si es presionado este boton debe hacer que el tiempo sea cero */}
            <button onClick={() => {
              if (running) clearInterval(timer.current)
                setRunning(!running) // Si este es presionado va a limpiar el intervalo y cambiar el setRunning
            }}>{running ? 'Stop' : 'Start'}</button>
        </div>
    )
}

Time.propTypes = {
    board: PropTypes.array.isRequired, // Valida que board sea un array y sea requerido
    setBoard: PropTypes.func.isRequired, // Valida que setBoard sea una función y sea requerida
};