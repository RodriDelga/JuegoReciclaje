import PropTypes from 'prop-types'

export const Square = ({ children, updateBoard, index }) => {

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className="square">
            {children}
        </div>
    )
}

Square.propTypes = {
    children: PropTypes.node, // Valida que children puede ser cualquier tipo de nodo de React
    updateBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}