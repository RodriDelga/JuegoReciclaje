import PropTypes from 'prop-types'

export const Square = ({ children, updateBoard, index, setSelected }) => {

    const handleClick = () => {
        updateBoard(index)
        setSelected(true)
    }

    return (
        <div onClick={handleClick} className="square">
            {children}
        </div>
    )
}

Square.propTypes = {
    children: PropTypes.node,
    updateBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    setSelected: PropTypes.func.isRequired
}