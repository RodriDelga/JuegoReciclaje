import PropTypes from 'prop-types'

export const Square = ({ children, updateBoard, index }) => {// Se reciben los valores enviados desde FollowMouse

    const handleClick = () => {// Esta función va a mandarle el index a la función updateBoard
        updateBoard(index)// ---> Ir a FollowMouse.jsx en la parte updateBoard
    }

    return (
        <div onClick={handleClick} className="square">{/* Cuando un Square o cuadro ejecute el metodo onClick va a realizar la funcion handleClick */}
            {children}
        </div>
    )
}

Square.propTypes = {
    children: PropTypes.node, // Valida que children puede ser cualquier tipo de nodo de React
    updateBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}